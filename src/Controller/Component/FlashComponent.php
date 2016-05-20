<?php
/**
 * Copyright (c) Frank Förster (http://frankfoerster.com)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Frank Förster (http://frankfoerster.com)
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller\Component;

use Cake\Network\Exception\InternalErrorException;

/**
 * Class FlashComponent
 *
 * @method void error() error(string $message, string $key = 'flash', array $options = [])
 * @method void info() info(string $message, string $key = 'flash', array $options = [])
 * @method void success() success(string $message, string $key = 'flash', array $options = [])
 * @method void warning() warning(string $message, string $key = 'flash', array $options = [])
 */
class FlashComponent extends \Cake\Controller\Component\FlashComponent
{
    /**
     * Magic method for verbose flash methods.
     *
     * @param string $name The type of the flash message, e.g. success.
     * @param array $args Parameters to pass when calling `FlashComponent::set()`.
     * @return void
     * @throws \Cake\Network\Exception\InternalErrorException If missing the flash message.
     */
    public function __call($name, $args)
    {
        if (count($args) < 1) {
            throw new InternalErrorException('Flash message missing.');
        }

        $message = $args[0];

        $options = [
            'element' => 'default',
            'key' => (isset($args[1]) && !empty($args[1])) ? $args[1] : 'flash',
            'params' => [
                'class' => '',
                'type' => $name,
                'dismiss' => true
            ]
        ];

        $customOptions = isset($args[2]) ? (array)$args[2] : [];

        if (isset($customOptions['element'])) {
            $options['element'] = $customOptions['element'];
            unset($customOptions['element']);
        }

        $options['params'] = array_merge($options['params'], $customOptions);
        if (!$options['params']['dismiss']) {
            $class = 'flash-message--no-dismiss';
            if (isset($options['params']['class']) && $options['params']['class'] !== '') {
                $class = ' ' . $class;
            }
            $options['params']['class'] .= $class;
        }

        parent::set($message, $options);
    }
}
