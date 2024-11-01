import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import SigninPage from "../pages/auth/signin";
import SignupPage from "../pages/auth/signup";
import AboutPage from "../pages/main/about";
import ArticlePage from "../pages/main/article";
import ContactPage from "../pages/sub/contact";
import CoursePage from "../pages/main/course";
import HomePage from "../pages/main/home";
import TermAndConditionPage from "../pages/sub/term-and-condition";
import PrivacyPage from "../pages/sub/privacy";
import WorkPage from "../pages/main/work";
import ArticleDetailPage from "../pages/main/article/detail";
import WorkDetailPage from "../pages/main/work/detail";
import ProfilePage from "../pages/sub/profile";
import ForgotPasswordPage from "../pages/auth/forgot-password";
import ResetPasswordPage from "../pages/auth/forgot-password/reset-password";
import NewPasswordPage from "../pages/auth/forgot-password/new-password";
import ProtectedRoute from "./protected-route";

export const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/about",
          element: <AboutPage/>
        },
        {
          path: "/article",
          element: <ArticlePage/>,
        },
        {
          path: "/article/:articleId",
          element: <ArticleDetailPage/>
        },
        {
          path: "/course",
          element: <CoursePage/>
        },
        {
          path: "/work",
          element: <WorkPage/>
        },
        {
          path: "/work/:id",
          element: <WorkDetailPage/>
        },
        {
          path: "/contact",
          element: <ContactPage/>
        },
        {
          path: "/term-and-condition",
          element: <TermAndConditionPage/>
        },
        {
          path: "/privacy",
          element: <PrivacyPage/>   
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <ProfilePage/>
            </ProtectedRoute>
          )
        }
      ]
    },
    {
      path: "/signin",
      element: <SigninPage/> 
    },
    {
      path: "/signup",
      element: <SignupPage/>
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage/>
    },
    {
      path: "/reset-password",
      element: <ResetPasswordPage/>
    },
    {
      path: "/new-password",
      element: <NewPasswordPage/>
    }
  ])