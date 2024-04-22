/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 */

interface IRoute {
  path?: string
  icon?: string
  name: string
  routes?: IRoute[]
  checkActive?(pathname: string, route: IRoute): boolean
  exact?: boolean
}

export function routeIsActive(pathname: string, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route)
  }

  return route?.exact
    ? pathname == route?.path
    : (route?.path ? pathname.indexOf(route.path) === 0 : false)
}

const routes: IRoute[] = [
  {
    path: '/dashboard', 
    icon: 'wallet.png', 
    name: 'Wallet', // name that appear in Sidebar
    exact: true,
  },
  {
    path: '/dashboard/bay-sell',
    icon: 'buy-sell.png',
    name: 'Bay / Sell',
  },
  {
    path: '/dashboard/transactions',
    icon: 'transactions.png',
    name: 'Transactions',
  },
  {
    path: '/dashboard/verification',
    icon: 'verification.png',
    name: 'Verification',
  },
]

export type { IRoute };
export default routes;
