import { useState, useEffect, useCallback } from 'react';

export const setCookie = (name, value, options) => {
  const optionsWithDefaults = {
    days: 7,
    path: '/',
    ...options,
  };
  const expires = new Date(
    Date.now() + optionsWithDefaults.days * 864e5
  ).toUTCString();
  document.cookie =
    name +
    '=' +
    encodeURIComponent(value) +
    '; expires=' +
    expires +
    '; path=' +
    optionsWithDefaults.path;
};

export const getCookie = (name) => {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
};

export default function useCookie(key, initialValue) {
  const [item, setItem] = useState(initialValue);

  useEffect(
    () => {
      setItem(getCookie(key));
    },
    [key],
  );

  const updateItem = useCallback(
    (value, options) => {
      setItem(value);
      setCookie(key, value, options);
    },
    [key],
  );

  return [item, updateItem];
}
