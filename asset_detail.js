import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/AssetDetail.module.css';

const AssetDetail = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay (you can replace this with actual data fetching logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to clear the timeout on component unmount
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <h1>The Foundation Asset Search Database</h1>
      </header>
      <main>
        {loading ? (
          <div className={styles.loadingBar}>
            Loading...
          </div>
        ) : (
          <div>
            {router.query.found === 'true' ? (
              <h2 className={styles.assetFound}>Asset Found!</h2>
            ) : (
              <h2 className={styles.assetNotFound}>Asset Not Found!</h2>
            )}
          </div>
        )}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 The Foundation Asset Search Database</p>
      </footer>
    </div>
  );
};

export default AssetDetail;
Create a new CSS file styles/AssetDetail.module.css and add the following styles:
styles/AssetDetail.module.css:

css
Copy code
/* AssetDetail.module.css */
.header {
  background-color: #333;
  padding: 20px;
  text-align: center;
}

h1 {
  margin: 0;
}

main {
  padding: 20px;
  text-align: center;
}

.loadingBar {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

.assetFound {
  color: green;
}

.assetNotFound {
  color: red;
}

.footer {
  background-color: #333;
  padding: 10px;
  text-align: center;
}
