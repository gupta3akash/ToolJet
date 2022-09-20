import React from 'react';
import { ButtonSolid } from '../_components/AppButton';

export const LinkExpiredInfoScreen = function LinkExpiredInfoScreen() {
  return (
    <div className="info-screen-wrapper">
      <div className="link-expired-card">
        <img
          className="info-screen-email-img"
          src={'assets/images/onboarding assets /02 Illustrations /Verification failed.svg'}
          alt="email image"
        />
        <h1 className="common-auth-section-header">The verification link has expierd</h1>
        <p className="info-screen-description">
          The verification link sent your email has been expierd. Please resend the email to get a new verification link
        </p>
        <ButtonSolid>Resend verification email</ButtonSolid>
      </div>
    </div>
  );
};