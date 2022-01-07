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
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gutenberg' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define('AUTH_KEY',         'U1_~.u.]~J+Z#{2+eO*/W|xZzM@$Umu{%UF+OwrKKr|A,,choDUHP*XtPZGB=1,,');
define('SECURE_AUTH_KEY',  'fpPR~[|#0_Z?nkh:oWkw6|*>m=PRaL&2r^ufx)gmp/p.wjWxg|L~TC$p]-PjP`/.');
define('LOGGED_IN_KEY',    '|o-I ]?pEeHrPXK~-#8R]MH/xdmk0X01gY:}>^#.w^lYO+mU!Lu`%E{+46xBf^{I');
define('NONCE_KEY',        '8/fw5-ru[Vt!V#,tU<Z|s?fHH%+9}kQ2j=Fe;_6pNqs6* E-.,`VAL #`4j#)Sq;');
define('AUTH_SALT',        'f,G}b0}].z_*0xF$|3V:[iE`Prk)-ic~k%L0W:-VYO7N0m-yy`+3jo|ul[0/5AHO');
define('SECURE_AUTH_SALT', '}2b&n-FnKi ^N=+D*]|G{.[rK`qb2=~sCF h*kLuqgJtO|D/]omwgLVH`7F$xTWt');
define('LOGGED_IN_SALT',   'DfdHz|%C*^%#++1x1+MT1dJer<D%65]Y9*| r<d sJ,WQ&AC5FRbK6l=x9P4@4|P');
define('NONCE_SALT',       'RN8/!pt&Wlc[b)aCZ)J0He_]7<K]-MN4O$@lK1s=}9vT,|x}Q~)Sd&1`<tOb|Dl%');
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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
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
