"use client";
import CookieConsent from "react-cookie-consent";

declare global {
    interface Window {
        dataLayer: Array<any>;
        gtag: (...args: any[]) => void;
    }
}

export default function ConsentBanner() {
    const handleAccept = () => {
        window.dataLayer.push({
            event: 'consent_update',
            consent_type: 'granted'
        });

        window.gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'functionality_storage': 'granted',
            'personalization_storage': 'granted'
        });
    };

    const handleDecline = () => {
        window.dataLayer.push({
            event: 'consent_update',
            consent_type: 'denied'
        });

        window.gtag('consent', 'update', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied'
        });
    };

    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept All"
            declineButtonText="Reject All"
            enableDeclineButton
            onAccept={handleAccept}
            onDecline={handleDecline}
            cookieName="gtm_consent"
            expires={365}
            overlay
            style={{
                background: "rgba(0,0,0,0.9)",
                padding: "20px",
                fontSize: "14px",
                zIndex: 9999
            }}
            buttonStyle={{
                background: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "12px 24px",
                fontSize: "14px",
                cursor: "pointer",
                marginLeft: "10px"
            }}
            declineButtonStyle={{
                background: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "12px 24px",
                fontSize: "14px",
                cursor: "pointer",
                marginRight: "10px"
            }}
        >
            We use cookies to enhance your experience. Choose to accept or reject cookies.
        </CookieConsent>
    );
}