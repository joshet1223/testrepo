import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/AssetDetail.module.css';

const AssetDetail = () => {
  const router = useRouter();
  const { assetName } = router.query;

  useEffect(() => {
    // Redirect back to the homepage after 3 seconds if assetName is not found
    if (!assetName) {
      const redirectTimeout = setTimeout(() => {
        router.push('/');
      }, 3000);

      // Cleanup function to clear the timeout on component unmount
      return () => clearTimeout(redirectTimeout);
    }

    // Custom logic for handling the redirect for P-006
    if (assetName === 'P-006') {
      // Add your own logic here for the specific redirect
      // Example: router.push('/some_custom_route');
    }
  }, [assetName, router]);

  return (
    <div>
      <header className={styles.header}>
        <h1>The Foundation Asset Search Database</h1>
      </header>
      <main>
        {assetName ? (
          <div>
            <h2 className={styles.assetFound}>Asset Found: {assetName}</h2>
          </div>
        ) : (
          <h2 className={styles.assetNotFound}>Asset Not Found! Redirecting...</h2>
        )}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 The Foundation Asset Search Database</p>
      </footer>
    </div>
  );
};

export default AssetDetail;
