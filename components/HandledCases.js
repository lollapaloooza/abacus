import { Box, Typography, useMediaQuery } from '@mui/material'
import Container from './Container'
import Image from 'next/image'
import Text_with_title from './Texts/Text_with_title'
import { blur_image_url } from '@/utils/blur_image_url'
import { useTranslation } from 'react-i18next'

export default function HandledCases() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('tablet'))
  const { url } = blur_image_url()
  const { t } = useTranslation()
  const description_br = t(
    'pages.news.slug.long_cases_banner.items.description'
  ).replaceAll('{br}', '<br/><br/>')

  return (
    <Container>
      <Box mb={'80px'} maxWidth={1000} mx={mobile ? 'auto' : 0}>
        <Typography
          sx={{
            color: '#25354F',
            fontFamily: "'RedHat-Bold', sans-serif",
            fontSize: mobile ? '30px' : '54px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            mb: '63px',
            textAlign: mobile ? 'center' : 'unset',
          }}
        >
          {t('Longest Handled Cases')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            columnGap: '50px',
            mb: mobile ? '50px' : '64px',
            flexDirection: mobile ? 'column' : 'unset',
            rowGap: mobile ? '50px' : 'unset',
            alignItems: mobile ? 'center' : 'unset',
          }}
        >
          {[
            {
              title: 'pages.news.slug.long_cases_banner.items.1',
              image: '/images/news-banner/handled-cases/1.png',
            },
            {
              title: 'pages.news.slug.long_cases_banner.items.2',
              image: '/images/news-banner/handled-cases/2.png',
            },
          ].map((el) => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: mobile ? '30px' : '50px',
              }}
            >
              <Box
                maxWidth={467}
                maxHeight={mobile ? 400 : 456}
                position={'relative'}
                width={mobile ? '100%' : '100vw'}
                height={'100vh'}
              >
                <Image
                  src={el?.image}
                  layout='fill'
                  alt='handled-cases-image'
                  objectFit='cover'
                  style={{ borderRadius: '24px' }}
                  placeholder='blur'
                  blurDataURL={url}
                />
              </Box>
              <Box sx={{ maxWidth: 364, width: '100%' }}>
                <Text_with_title title={el?.title} />
              </Box>
            </Box>
          ))}
        </Box>
        <Typography
          sx={{
            color: '#091F36',
            fontFamily: 'Mont-SemiBold',
            fontSize: mobile ? '16px' : '18px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
            textAlign: mobile ? 'center' : 'unset',
          }}
        >
          {/* <div dangerouslySetInnerHTML={{ __html: description_br }} /> */}
        </Typography>
      </Box>
    </Container>
  )
}
