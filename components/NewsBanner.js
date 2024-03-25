import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import Container from './Container'
import Text_with_title from './Texts/Text_with_title'
import ArrowRight from '@/public/icons/ArrowRight'
import NewsItem from './CardItems/NewsItem'
import { news_data } from '@/public/data/news_data'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

export default function NewsBanner() {
  const { push } = useRouter()
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('tablet'))
  const { t } = useTranslation()
  return (
    <Container maxWidth={1600}>
      <Box mb='150px' sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: mobile ? 'center' : 'space-between',
            mb: '88px',
          }}
        >
          <Box>
            <Text_with_title
              title={'News'}
              title_main={'pages.main.news.title'}
              span_style={'font-weight: 800; color: #E22A34'}
            />
          </Box>
          <Typography
            sx={{
              color: '#091F36',
              textAlign: 'center',
              fontFamily: 'Mont-SemiBold',
              fontSize: mobile ? '18px' : '24px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              display: 'flex',
              columnGap: '20px',
              cursor: 'pointer',
              alignItems: 'center',
              position: mobile ? 'absolute' : 'unset',
              bottom: -100,
              left: '50%',
              transform: mobile ? 'translateX(-50%)' : 'unset',
            }}
            onClick={() => push('/news')}
          >
            {t('See more')}
            <ArrowRight color={'#091F36'} width={32} height={32} />
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            columnGap: '152px',
            rowGap: '80px',
            flexDirection: mobile ? 'column' : 'row',
            alignItems: mobile ? 'center' : 'unset',
          }}
        >
          <Grid container columnSpacing={2} rowSpacing={10}>
            {news_data.slice(0, 4).map((el) => (
              <Grid
                item
                large_monitor={6}
                monitor={6}
                desktop={6}
                tablet={6}
                mobile={12}
              >
                <NewsItem {...{ el }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
