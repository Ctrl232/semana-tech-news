package com.semana.news_api.config;

import com.semana.news_api.model.Article;
import com.semana.news_api.repository.ArticleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ArticleRepository repository;

    public DataSeeder(ArticleRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        repository.saveAll(List.of(
            make("Gobierno anuncia nueva reforma tributaria para 2025",
                "El Ministerio de Hacienda presentó hoy los lineamientos de la reforma que busca aumentar el recaudo en un 15%.",
                "El Ministerio de Hacienda presentó hoy los lineamientos de la reforma tributaria que busca aumentar el recaudo fiscal en un 15%. La propuesta incluye cambios en el impuesto de renta para personas naturales y ajustes al IVA en bienes de lujo. Expertos del sector privado ya anticipan debates intensos en el Congreso durante los próximos meses.",
                "Política", "Laura Gómez",
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
                LocalDateTime.now().minusDays(1)),

            make("Inflación en Colombia cede por tercer mes consecutivo",
                "El DANE reportó una inflación del 6.2% anual en mayo, la cifra más baja desde 2022.",
                "El DANE reportó una inflación del 6.2% anual en mayo, la cifra más baja desde 2022. Los analistas atribuyen la desaceleración a la estabilización en los precios de alimentos y combustibles. El Banco de la República evalúa si reducir la tasa de interés en su próxima reunión de junio.",
                "Economía", "Carlos Restrepo",
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
                LocalDateTime.now().minusDays(2)),

            make("Colombia lanza su primera política nacional de Inteligencia Artificial",
                "El MinTIC presentó la hoja de ruta para que Colombia sea líder en IA en Latinoamérica para 2030.",
                "El Ministerio de Tecnologías de la Información presentó la Política Nacional de Inteligencia Artificial, una hoja de ruta que busca posicionar a Colombia como referente regional en IA para 2030. La política contempla inversión en formación de talento, marcos regulatorios y alianzas con el sector privado y academia.",
                "Tecnología", "Ana Torres",
                "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800",
                LocalDateTime.now().minusDays(3)),

            make("Selección Colombia sub-20 avanza a semifinales del Sudamericano",
                "Los jóvenes cafeteros golearon 3-0 a Ecuador y se aseguran un cupo en la fase semifinal.",
                "La Selección Colombia sub-20 goleó 3-0 a Ecuador con doblete de Luciano y gol de Castaño, asegurando su clasificación a semifinales del Campeonato Sudamericano. El equipo dirigido por Héctor Cárdenas muestra una solidez defensiva notable y una delantera eficaz que ilusiona a los aficionados.",
                "Deportes", "Julio Mendoza",
                "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
                LocalDateTime.now().minusDays(4)),

            make("Festival Estéreo Picnic anuncia cartel completo para 2026",
                "Coldplay, Bad Bunny y Karol G encabezan la lista de artistas del festival más esperado del año.",
                "El Festival Estéreo Picnic confirmó su cartel completo para la edición 2026. Coldplay, Bad Bunny y Karol G encabezarán las noches del viernes, sábado y domingo respectivamente. La preventa de boletas se agotó en menos de dos horas, rompiendo el récord de ediciones anteriores.",
                "Cultura", "Valeria Ospina",
                "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
                LocalDateTime.now().minusDays(5)),

            make("Startups colombianas recaudan USD 200M en el primer trimestre de 2025",
                "El ecosistema emprendedor local sigue atrayendo inversión extranjera pese al entorno económico global.",
                "Las startups colombianas recaudaron 200 millones de dólares en el primer trimestre de 2025, según el informe de Endeavor Colombia. Los sectores fintech, agritech y healthtech concentraron el 70% de la inversión. Bogotá y Medellín se consolidan como los principales hubs del ecosistema.",
                "Economía", "Sebastián Ríos",
                "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
                LocalDateTime.now().minusDays(6)),

            make("Llega a Colombia el primer tren de hidrógeno de Latinoamérica",
                "El proyecto piloto conectará Bogotá con la Sabana en una primera fase de 40 kilómetros.",
                "Colombia se convierte en el primer país latinoamericano en operar un tren de hidrógeno verde. El proyecto piloto, desarrollado en alianza con empresas alemanas, conectará Bogotá con municipios de la Sabana en una primera fase de 40 kilómetros. La operación comercial está prevista para finales de 2026.",
                "Tecnología", "Marcela Vargas",
                "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800",
                LocalDateTime.now().minusDays(7)),

            make("Congreso aprueba ley de teletrabajo con nuevas garantías laborales",
                "La nueva norma obliga a las empresas a cubrir gastos de conectividad y equipos para trabajadores remotos.",
                "El Congreso de la República aprobó en tercer debate la nueva Ley de Teletrabajo, que establece obligaciones claras para empleadores respecto al pago de conectividad, dotación de equipos y garantías de desconexión digital. La ley entra en vigencia en 90 días y aplica a empresas con más de 10 empleados.",
                "Política", "Diego Herrera",
                "https://images.unsplash.com/photo-1593642532400-2682810df593?w=800",
                LocalDateTime.now().minusDays(8))
        ));
    }

    private Article make(String title, String summary, String content,
                         String category, String author, String imageUrl,
                         LocalDateTime publishedAt) {
        Article a = new Article();
        a.setTitle(title);
        a.setSummary(summary);
        a.setContent(content);
        a.setCategory(category);
        a.setAuthor(author);
        a.setImageUrl(imageUrl);
        a.setPublishedAt(publishedAt);
        a.setActive(true);
        return a;
    }
}