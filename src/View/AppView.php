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
namespace App\View;

use Cake\View\View;
use FrankFoerster\Asset\View\Helper\AssetHelper;
use FrankFoerster\Filter\View\Helper\FilterHelper;

/**
 * Application View
 *
 * Your application’s default view class
 *
 * @property FilterHelper Filter
 * @property AssetHelper Asset
 * @link http://book.cakephp.org/3.0/en/views.html#the-app-view
 */
class AppView extends View
{
    /**
     * Initialization hook method.
     *
     * Use this method to add common initialization code like loading helpers.
     *
     * e.g. `$this->loadHelper('Html');`
     *
     * @return void
     */
    public function initialize()
    {
        parent::initialize();

        $this->loadHelper('Asset', [
            'className' => 'FrankFoerster/Asset.Asset'
        ]);

        $this->loadHelper('Filter', [
            'className' => 'FrankFoerster/Filter.Filter'
        ]);
    }
}
