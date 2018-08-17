import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import styles from './styles';

const IconButton = ({
  size,
  text,
  color,
  classes,
  variant,
  iconName,
  textFirst,
  iconFirst,
  iconClass,
  textClass,
  buttonClass,
  containerClass,
}) => (
  <div className={classNames(classes.containerClass, containerClass)}>
    <Button
      size={size}
      variant={variant}
      className={classNames(classes.button, buttonClass)}
    >
      {
        textFirst && !iconFirst ?
        <div className={classNames(classes.text, textClass)}>
          { text }
        </div> :
        null
      }
      {
        iconName ?
        <Icon
          className={classNames(classes.icon, iconClass)}
        >
          {iconName}
        </Icon> :
        null
      }
      {
        iconFirst && !textFirst ?
        <div className={classNames(classes.text, textClass)}>
          { text }
        </div> :
        null
      }
    </Button>
  </div>
);

const enhancer = compose(
  withStyles(styles)
);

export default enhancer(IconButton);