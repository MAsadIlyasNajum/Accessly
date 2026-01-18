/*
 * Created by Asad on 18 JAN 2026
 */

export enum AppRoutes {
  LOGIN = 'Login',
  SIGNUP = 'Signup',
  HOME = 'Home',
}

// If in future you have dynamic params, define here
export type RouteParams = {
  [AppRoutes.LOGIN]: undefined;
  [AppRoutes.SIGNUP]: undefined;
  [AppRoutes.HOME]: undefined;
};
