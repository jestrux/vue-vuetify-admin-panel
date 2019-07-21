// Container
const MainContainer = () => import('../UI/MainContainer');
// Pages
const Login = () => import('../UI/pages/Login');
const Home = () => import('../UI/pages/Home');

export default [
  {
    path: '/',
    name: 'Tz SDG Portal',
    redirect: '/home',
    component: MainContainer,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
