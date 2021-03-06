import clsx from 'clsx'
import Link from 'next/link'
import * as React from 'react'
import ABswitcher from './ABswitcher'
import styles from './style.module.scss'

const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.baseContainer, styles.container)}>
        <Link href="/" passHref>
          <a title="Home page">
            <img
              alt="website logo"
              className={styles.logo}
              src="/icons/icon.svg"
            />
          </a>
        </Link>
        <div style={{ flex: 1 }} />
        <ABswitcher />
      </div>
    </header>
  )
}

export default Header
