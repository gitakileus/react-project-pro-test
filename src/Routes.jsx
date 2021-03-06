import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const TestPage = lazy(() => import("./pages/TestPage/TestPage"));
const ResultsPage = lazy(() => import("./pages/ResultsPage/ResultsPage"));
const UsefulInfoPage = lazy(() => import("./pages/UsefulInfoPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

const MyRoutes = () => {
    return (
        <Suspense fallback={<p>...Loading</p>}>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/auth"} element={<AuthPage />} />
                <Route path={"/test"} element={<TestPage />} />
                <Route path={"/results"} element={<ResultsPage />} />
                <Route path={"/useful-info"} element={<UsefulInfoPage />} />
                <Route path={"/contacts"} element={<ContactsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    )
};

export default MyRoutes;