<?php
/**
 * Plugin Name: Basic Alerts
 * Description: basic-alerts — is a Gutenberg plugin for bootstrap like alerts
 * Author: Dima Wolf
 * Author URI: https://dimitri-wolf.de
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package DIMA
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
