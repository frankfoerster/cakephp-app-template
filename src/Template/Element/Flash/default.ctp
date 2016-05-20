<?php
/**
 * @var string $message
 * @var array $params
 */
$class = ['flash-message'];
if (!empty($params['type'])) {
    $class[] = 'flash-message--' . $params['type'];
}
if (!empty($params['class'])) {
    $class[] = $params['class'];
}
?><div class="<?= h(join(' ', $class)) ?>"><?= $message ?><a href="javascript:void(0)" class="dismiss-flash" title="<?= __('Dismiss this message.') ?>">&times;</a></div>
