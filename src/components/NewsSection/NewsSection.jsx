import { useState, useEffect } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import HeaderBar from '../HeaderBar';
import { fetchCryptoPanicNews } from '../../api/cryptoNews';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetchCryptoPanicNews();
      if (response.results.length > 0) {
        const formattedNews = response.results
          .filter((news) => news.votes.liked >= 0 || news.votes.positive >= 0)
          .map((news) => {
            const currencies =
              news?.currencies?.map((currency) => currency.title).join(', ') ??
              '';
            const description = news.description || currencies;
            return {
              time: new Date(news.published_at).toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
              }),
              title: news.title,
              description,
              link: news.url,
            };
          });
        setNews(formattedNews);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <div className='min-h-auto flex flex-col items-center'>
        <HeaderBar title='News Momentum' bgColor='bg-[#C38A00]' />
        {loading ? (
          <div className='text-white text-center mt-20'>Loading...</div>
        ) : (
          <div className='p-2 bg-[#474747] rounded-lg h-[532px] overflow-y-auto'>
            {news.map((article) => (
              <NewsCard
                key={`${article.title}-${article.time}`}
                time={article.time}
                title={article.title}
                description={article.description}
                link={article.link}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NewsSection;
