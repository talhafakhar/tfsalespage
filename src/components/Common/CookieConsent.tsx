"use client";
import CookieConsent from "react-cookie-consent";
declare global {
    interface Window {
        dataLayer: Array<Record<string, unknown>>;
        gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    }
}

export default function ConsentBanner() {
    const handleAccept = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "consent_given" });

        window.gtag?.("consent", "update", {
            ad_storage: "granted",
            analytics_storage: "granted",
        });
    };

    const handleDecline = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "consent_declined" });

        window.gtag?.("consent", "update", {
            ad_storage: "denied",
            analytics_storage: "denied",
        });
    };
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            enableDeclineButton
            onAccept={handleAccept}
            onDecline={handleDecline}
        >
            We use cookies to improve your experience.
        </CookieConsent>
    );
}
