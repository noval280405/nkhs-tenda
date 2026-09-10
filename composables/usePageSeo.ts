export const usePageSeo = (
  title: string,
  description = 'Jasa tenda, dekorasi, pelaminan dan tata rias pernikahan dengan berbagai pilihan model dan estimasi harga.',
  image?: string,
) => {
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogType: 'website',
    twitterCard: 'summary_large_image',
  })
}
