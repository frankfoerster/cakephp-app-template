<?php
/**
 * @var \App\View\AppView $this
 */
use Cake\Core\Configure;
use Cake\Routing\Router; ?>

<?php if (Configure::read('debug')): ?>
    <?= $this->Asset->js('/ASSETS/js/vendor/requirejs/require.js') ?>
    <script type="text/javascript">
        require.config(<?= json_encode([
            'baseUrl' => Router::url('/ASSETS/js/src'),
            'urlArgs' => 't=' . time()
        ]) ?>);
        require(['common'], function() {
            require(['app'], function(app) {
                app.init();
            });
        });
    </script>
<?php else: ?>
    <?= $this->Asset->js('js/app.js') ?>
    <script type="text/javascript">
        require(['app'], function(app) {
            app.init();
        });
    </script>
<?php endif;
