import {
  useQueryClient,
  useMutation,
  useQuery,
  useInfiniteQuery,
} from "@tanstack/react-query";

import {
  createUserAccount,
  getCurrentUSer,
  signInAccount,
  signOutAccount,
} from "../appwrite/api";

export const useCreateUserAccount = () => {
  return useMutation({ mutationFn: (user) => createUserAccount(user) });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user) => signInAccount(user),
  });
};

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["getCurrentUser"],

    queryFn: getCurrentUSer,
  });
};

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};
