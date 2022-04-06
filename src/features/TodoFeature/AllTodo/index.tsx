import {
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import useHooks from './hooks';

const AllTodoFeature = () => {
  const { selectors } = useHooks();
  const { items } = selectors;

  return (
    <List
      sx={{
        margin: 'auto',
        width: '500px',
        mt: 3,
      }}
    >
      {items.map((todo: any) => (
        <ListItem
          secondaryAction={
            <Stack
              direction="row"
              gap="0.5rem"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton onClick={() => {}} edge="end" aria-label="delete">
                <EditOutlinedIcon sx={{ color: 'blue' }} />
              </IconButton>
              <IconButton onClick={() => {}} edge="end" aria-label="delete">
                <DeleteIcon sx={{ color: 'red' }} />
              </IconButton>
            </Stack>
          }
          key={todo.id}
          sx={{
            mt: 1,
            background: '#fff',
            boxShadow: '4px 4px 4px rgba(0,0,0,0.1)',
            borderRadius: '8px',
          }}
        >
          <ListItemText primary={todo.name} secondary={null} />
        </ListItem>
      ))}
    </List>
  );
};

export default AllTodoFeature;
