import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: '100%',
    marginBottom: theme.typography.pxToRem(10)
  },
  button: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: '4px solid transparent',
    backgroundColor: '#262626',
    alignItems: 'flex-end'
  },
  buttonLabel: {
    border: `${theme.typography.pxToRem(4)} solid currentColor`,
    padding: `${theme.typography.pxToRem(7)} ${theme.typography.pxToRem(14)}`,
    borderRadius: theme.typography.pxToRem(8),
    marginBottom: theme.typography.pxToRem(10)
  }
}));
const TagItem = ({ item }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Button variant="outlined" className={classes.button}>
          <Typography variant="h5" component="h5" noWrap className={classes.buttonLabel}>
            {item.name}
          </Typography>
        </Button>
      </div>
      <div>
        <Typography variant="body1" component="p" noWrap>
          {item.name}
        </Typography>
        <Typography variant="caption" component="div" noWrap>
          {`${item.count} Results`}
        </Typography>
      </div>
    </div>
  );
};

TagItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    count: PropTypes.number
  })
};

export default TagItem;
