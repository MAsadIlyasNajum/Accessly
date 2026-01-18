/*
 * Created by Asad on 17 JAN 2026
 */

import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
 