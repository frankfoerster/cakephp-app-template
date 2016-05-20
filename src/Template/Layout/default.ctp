<?php
/**
 * @var \App\View\AppView $this
 */
use Cake\Core\Configure;
?>
<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $this->fetch('title') ?></title>
    <?= $this->Html->meta('icon') ?>
    <?= $this->Asset->css('css/app' . (Configure::read('debug') ? '.css' : '.min.css')) ?>
</head>
<body>
    <div id="app">
        <h1><a href=""><?= $this->fetch('title') ?></a></h1>
        <?= $this->Flash->render() ?>
        <?= $this->fetch('content') ?>
    </div>
    <?= $this->element('js-setup') ?>
</body>
</html>
