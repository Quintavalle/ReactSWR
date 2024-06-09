import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

const useGithubUser = (username) => {
  if (!username) {
    return {
      user: null,
      loading: false,
      error: null
    };
  }

  const { data: user, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    user,
    loading: !user && !error,
    error
  };
};

export default useGithubUser;

