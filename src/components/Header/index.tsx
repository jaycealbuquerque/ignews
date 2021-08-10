import Link from 'next/link';
import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss';

export function Header () {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts">
            <a>Post</a>
          </Link>
        </nav>
        <SingInButton />
      </div>
    </header>
  );
}
