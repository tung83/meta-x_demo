import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import TagItem from '../../components/Tag/TagItem';
import { tagsFetchAll } from '../../utils/apiServices';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  tagsWrapper: {
    maxWidth: theme.typography.pxToRem(846),
    margin: `100px auto`
  },
  grid: {
    display: 'grid',
    rowGap: theme.typography.pxToRem(36),
    columnGap: theme.typography.pxToRem(24),
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
    }
  }
}));
const TagsPage = () => {
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  useEffect(async () => {
    const result = await tagsFetchAll();
    setTags(result.data);
  }, []);
  return (
    <Stack spacing={2} className={classes.tagsWrapper}>
      <div className={classes.grid}>
        {tags.map((user) => (
          <TagItem key={user.id} item={user}></TagItem>
        ))}
      </div>
    </Stack>
  );
};
export default TagsPage;
