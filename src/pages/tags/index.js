import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import TagItem from '../../components/Tag/TagItem';
import { tagsFetchAll } from '../../utils/apiServices';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import SkeletonLoading from '../../components/Progress/SkeletonLoading';

const TagsPage = () => {
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(async () => {
    setIsLoading(true);
    const result = await tagsFetchAll();
    setTags(result.data);
    setIsLoading(false);
  }, []);
  return (
    <Stack sx={{ maxWidth: '846px', margin: `81px auto` }}>
      <Typography
        variant="span"
        component="h4"
        sx={{
          display: 'block',
          fontSize: { xs: '24px', sm: '30px' },
          marginTop: { xs: '10px', sm: '0' },
          fontWeight: 400
        }}
      >
        Tags
      </Typography>

      <Box
        display="grid"
        sx={{
          paddingRight: { xs: '6px', sm: '0' },
          paddingLeft: { xs: '5px', sm: '0' },
          marginTop: '23px',
          rowGap: { xs: '21px', sm: '34px' },
          columnGap: '24px',
          gridTemplateColumns: {
            xs: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(4, minmax(0, 1fr))',
            lg: 'repeat(5, minmax(0, 1fr))'
          }
        }}
      >
        {isLoading ? (
          <SkeletonLoading sx={{ height: '150px', borderRadius: '10px' }} />
        ) : (
          tags.map((user) => <TagItem key={user.id} item={user}></TagItem>)
        )}
      </Box>
    </Stack>
  );
};
export default TagsPage;
