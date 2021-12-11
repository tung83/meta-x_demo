import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import clsx from 'clsx';

const styles = (theme) => ({
  root: {
    height: 4,
    width: 73,
    backgroundColor: '#FFFFFF',
    borderRadius: theme.typography.pxToRem(4),
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`
  },
  normal: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main
  },
  markedH4Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main
  },
  markedH6Left: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing(0.5),
    background: 'currentColor'
  }
});

const variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3'
};

const MetaButton = ({ children, classes, marked = false, variant, ...other }) => {
  return (
    <Button variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {marked ? <span className={clsx(classes.root, classes[variant])} /> : null}
    </Button>
  );
};

MetaButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  marked: PropTypes.oneOf([false, 'center', 'left']),
  variant: PropTypes.string
};

export default withStyles(styles)(MetaButton);
