import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productAPI } from '../services/api';
import { QUERY_KEYS } from '../constants';

// Hook to fetch all products
export const useProducts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: productAPI.getAllProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true, // Auto-refresh on window focus
    refetchOnReconnect: true,
  });
};

// Hook to fetch single product
export const useProduct = (id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCT, id],
    queryFn: () => productAPI.getProductById(id),
    enabled: !!id, // Only run if id exists
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  });
};

// Hook to fetch categories
export const useCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: productAPI.getCategories,
    staleTime: 10 * 60 * 1000, // 10 minutes (categories change less frequently)
    refetchOnWindowFocus: false,
  });
};

// Hook to update product
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productAPI.updateProduct,
    onSuccess: (updatedProduct, variables) => {
      // Update the products list cache
      queryClient.setQueryData([QUERY_KEYS.PRODUCTS], (oldData) => {
        if (!oldData) return oldData;
        return oldData.map((product) =>
          product.id === variables.id ? { ...product, ...updatedProduct } : product
        );
      });

      // Update the single product cache
      queryClient.setQueryData([QUERY_KEYS.PRODUCT, variables.id], updatedProduct);

      // Optionally invalidate to refetch
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PRODUCTS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PRODUCT, variables.id] });
    },
  });
};

// Hook to delete product
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productAPI.deleteProduct,
    onSuccess: (_, deletedId) => {
      // Remove from products list cache
      queryClient.setQueryData([QUERY_KEYS.PRODUCTS], (oldData) => {
        if (!oldData) return oldData;
        return oldData.filter((product) => product.id !== deletedId);
      });

      // Remove single product cache
      queryClient.removeQueries({ queryKey: [QUERY_KEYS.PRODUCT, deletedId] });

      // Invalidate to ensure consistency
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PRODUCTS] });
    },
  });
};
