import { useMediaQuery } from "react-responsive";

export const WithAdaptiveComponents = (desktop: JSX.Element, mobile: JSX.Element): JSX.Element | null => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    if (isMobile) return mobile || null;
    return desktop || null;
}