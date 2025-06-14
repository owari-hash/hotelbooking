import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';
import { IReviewItemProp } from 'src/types/review';
import { useBoolean } from 'src/hooks/use-boolean';

// ----------------------------------------------------------------------

const AVATAR_SIZE = 48;

const WIDTH = `calc(100% - ${AVATAR_SIZE + 20}px)`;

type Props = Partial<IReviewItemProp> & {
  tagUser?: string;
  hasReply?: boolean;
};

export default function ReviewItem({
  name,
  rating,
  message,
  tagUser,
  createdAt,
  hasReply,
  avatarUrl,
  helpful = 0,
}: Props) {
  const replyOpen = useBoolean();

  return (
    <>
      <Stack
        direction="row"
        sx={{
          py: 3,
          alignItems: 'flex-start',
          ...(hasReply && {
            ml: 'auto',
            width: WIDTH,
          }),
        }}
      >
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE, mr: 2.5 }}
        />

        <Stack sx={{ width: 1 }}>
          <Stack
            spacing={1}
            alignItems={{ sm: 'center' }}
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent={{ sm: 'space-between' }}
          >
            <Typography variant="subtitle2">{name}</Typography>

            {!hasReply && <Rating size="small" value={rating} precision={0.5} readOnly />}
          </Stack>

          {createdAt && (
            <Typography
              variant="body2"
              sx={{
                mb: 1,
                mt: { xs: 1, sm: 0.5 },
                color: 'text.disabled',
              }}
            >
              {fDate(createdAt)}
            </Typography>
          )}

          <Typography variant="body2">
            {tagUser && <strong>{`@${tagUser} `}</strong>}
            {message}
          </Typography>

          {!hasReply && (
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
              <Button size="small" color="inherit">
                Helpful ({helpful})
              </Button>

              <Box
                sx={{
                  width: 4,
                  height: 4,
                  bgcolor: 'text.disabled',
                  borderRadius: '50%',
                }}
              />

              <Button
                size="small"
                color={replyOpen.value ? 'primary' : 'inherit'}
                onClick={replyOpen.onToggle}
              >
                Reply
              </Button>
            </Stack>
          )}

          {!hasReply && replyOpen && (
            <TextField
              fullWidth
              hiddenLabel
              placeholder="Сэтгэгдэл үлдээх..."
              InputProps={{ sx: { height: 48 } }}
              sx={{ mt: 3 }}
            />
          )}
        </Stack>
      </Stack>

      <Divider sx={{ ml: 'auto', width: WIDTH }} />
    </>
  );
}
