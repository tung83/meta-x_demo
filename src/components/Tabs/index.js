import { useState } from 'react';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}
const PrimaryTabs = ({ tabs, classNames = '' }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classNames} sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            minHeight: '40px'
          }}
          aria-label="basic tabs ">
          {tabs?.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              {...a11yProps(index)}
              sx={{
                fontWeight: 400,
                fontSize: '16px',
                color: () => alpha('#929292', 0.87),
                textTransform: 'capitalize',
                flex: 1,
                lineHeight: 1.5,
                padding: '13px 16px 9px 16px',
                letterSpacing: '0.15px',
                minHeight: '40px',
                '&.Mui-selected': {
                  fontWeight: 700
                }
              }}
            />
          ))}
        </Tabs>
      </Box>
      {tabs?.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.children}
        </TabPanel>
      ))}
    </Box>
  );
};
PrimaryTabs.propTypes = {
  classNames: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
    })
  ).isRequired
};
export default PrimaryTabs;
