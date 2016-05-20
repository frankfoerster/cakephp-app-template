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
namespace App\Routing\Filter;

/**
 * AssetFlter
 * Provides access to src/Assets/... via http requests to /ASSETS/... during development.
 */
class AssetFilter extends \Cake\Routing\Filter\AssetFilter
{
    /**
     * Builds asset file path based off url
     *
     * @param string $url Asset URL
     * @return string|void Absolute path for asset file
     */
    protected function _getAssetFile($url)
    {
        $parts = explode('/', $url);

        if ($parts[0] === 'ASSETS') {
            unset($parts[0]);
            $url = array_values($parts);

            return APP . 'Assets' . DS . join(DS, $url);
        }

        return parent::_getAssetFile($url);
    }
}
