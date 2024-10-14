import React from 'react';
import cssStyle from './footer.module.css';

export default function Footer() {
    return (
        <div className={cssStyle.footer}>
            <div className={cssStyle.footerContent}>
                <p>@ 2024 Education. All Rights Reserved</p>
                <ul className={cssStyle.footerLinks}>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className={cssStyle.socialMedia}>
                <p>Follow us:</p>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
    );
}

