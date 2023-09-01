<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'UEL305' );

/** Database username */
define( 'DB_USER', 'bakali1' );

/** Database password */
define( 'DB_PASSWORD', 'Fatimita2000' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^8Bri*Rb@T7K>`QW[dAnS#j4|1B)zXhbpvS(QBt-2=ey6ww3rBw/m=y2U+2bt?&}' );
define( 'SECURE_AUTH_KEY',  'OgjMFmOsHlbMLGTf$1p6 ?%VREv/qXaUs%P-9^PKKJ1{xWzq`spN2-?R.0]58b2/' );
define( 'LOGGED_IN_KEY',    '[o~Lb||H<ktl34o)_/V|a>=xcG%NnHh+Mp~pfHr|4=#)v8Lmh 6GvM7K-M)76A3}' );
define( 'NONCE_KEY',        'prck^qX!9u-Lv}9 (w(%BdBA`[rU27(XV!1uJ)CX3?;oF fi|9ry5XGqwU/$ctdQ' );
define( 'AUTH_SALT',        'o,l0kw7~r(E,4v|;;=<p)hsomSL5m<!aOXZ5K@>KPDa%h,dxAsKc7=Q7w6R.0,~|' );
define( 'SECURE_AUTH_SALT', 'j;AI:u]T;-%tzqj1{Q9]nZUk4)oJJLAt2<(f:gl+s~ YxlXcAhCpC0a=by?VExk0' );
define( 'LOGGED_IN_SALT',   'M@RG&)M&&TXHd%6^G3)[Go3QF^.^1Zh*[y2fiWBj7rn|o>_|. k0bbbm0pWl*P]A' );
define( 'NONCE_SALT',       'XsAm{M$bxvO`y!EpYlFKl8!-pD@;&-S>KDa#97Kj3$au*E]z)p}U)dDHl%{1giYd' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
