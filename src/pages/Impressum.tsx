import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import Footer from "../components/Footer";
import theme from "../theme";

const useStyles = makeStyles({
  container: {
    padding: theme.spacing(4, 1)
  },
  wordBreak: {
    wordBreak: "break-all"
  }
});

export default function Impressum() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container} justify="center">
        <Grid item xs={12} md={10} lg={8}>
          <Typography variant="h1" className={classes.wordBreak}>
            <>Impressum</>
          </Typography>
          <Typography variant="body1">
            Informationspflicht laut §5 E-Commerce Gesetz, §14
            Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht
            laut §25 Mediengesetz. <br />
            <br />
            Dipl.-Ing. Andreas Wittmann <br />
            Fuchsthallergasse 13 <br />
            1090 Wien <br />
            Österreich Unternehmensgegenstand: IT Dienstleistungen
            <br />
            E-Mail:{" "}
            <a href="mailto: mail@andreaswittmann.com">
              mail@andreaswittmann.com
            </a>{" "}
            <br />
            Mitglied bei: WKO, Wien Berufsbezeichnung: Dienstleistungen in der
            automatischen Datenverarbeitung und Informationstechnik
          </Typography>
          <Typography variant="h3" className={classes.wordBreak}>
            EU-Streitschlichtung
          </Typography>
          <Typography variant="body1">
            Gemäß Verordnung über Online-Streitbeilegung in
            Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die
            Online-Streitbeilegungsplattform (OS-Plattform) informieren.
            Verbraucher haben die Möglichkeit, Beschwerden an die Online
            Streitbeilegungsplattform der Europäischen Kommission unter
            <a href="http://ec.europa.eu/odr?tid=221112244">
              http://ec.europa.eu/odr?tid=221112244
            </a>{" "}
            zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb
            in unserem Impressum. <br /> <br />
            Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder
            verpflichtet sind, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </Typography>
          <Typography variant="h3" className={classes.wordBreak}>
            Haftung für Inhalte dieser Webseite
          </Typography>
          <Typography variant="body1">
            Wir entwickeln die Inhalte dieser Webseite ständig weiter und
            bemühen uns korrekte und aktuelle Informationen bereitzustellen.
            Leider können wir keine Haftung für die Korrektheit aller Inhalte
            auf dieser Webseite übernehmen, speziell für jene die seitens
            Dritter bereitgestellt wurden.
            <br />
            <br />
            Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen,
            bitten wir Sie uns umgehend zu kontaktieren, Sie finden die
            Kontaktdaten im Impressum.
          </Typography>
          <Typography variant="h3" className={classes.wordBreak}>
            Haftung für Links auf dieser Webseite
          </Typography>
          <Typography variant="body1">
            Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt
            wir nicht verantwortlich sind. Haftung für verlinkte Websites
            besteht laut § 17 ECG für uns nicht, da wir keine Kenntnis
            rechtswidriger Tätigkeiten hatten und haben, uns solche
            Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links
            sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
            <br />
            <br />
            Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten
            wir Sie uns zu kontaktieren, Sie finden die Kontaktdaten im
            Impressum.
          </Typography>
          <Typography variant="h3" className={classes.wordBreak}>
            Urheberrechtshinweis
          </Typography>
          <Typography variant="body1">
            Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
            unterliegen dem Urheberrecht. Falls notwendig, werden wir die
            unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich
            verfolgen.
          </Typography>
          <Typography variant="h1" className={classes.wordBreak}>
            <>Datenschutzerklärung</>
          </Typography>
          <Typography variant="h3" className={classes.wordBreak}>
            Datenschutz
          </Typography>
          <Typography variant="body1">
            Wir haben diese Datenschutzerklärung (Fassung 09.01.2020-221112244)
            verfasst, um Ihnen gemäß der Vorgaben der
            Datenschutz-Grundverordnung (EU) 2016/679 zu erklären, welche
            Informationen wir sammeln, wie wir Daten verwenden und welche
            Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.
            <br />
            <br />
            Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr
            technisch klingen, wir haben uns bei der Erstellung jedoch bemüht
            die wichtigsten Dinge so einfach und klar wie möglich zu
            beschreiben.
          </Typography>
          <Typography variant="h3" className={classes.wordBreak}>
            GitHub Pages
          </Typography>
          <Typography variant="body1">
            Diese Website wird auf Servern von Github Inc., 88 Colin P Kelly Jr
            St, San Francisco, CA 94107, USA gehostet. Beachten Sie daher auch
            die GitHub Privacy Policy.
          </Typography>
          <Typography variant="h3" className={classes.wordBreak}>
            Cookies
          </Typography>
          <Typography variant="body1">
            Unsere Webseite verwendet HTTP-Cookies, um nutzerspezifische Daten
            zu speichern. Im Folgenden erklären wir, was Cookies sind und warum
            Sie genutzt werden, damit Sie die folgende Datenschutzerklärung
            besser verstehen.
          </Typography>
          <Typography variant="h3" className={classes.wordBreak}>
            Rechte laut Datenschutzgrundverordnung
          </Typography>
          <Typography variant="body1">
            Ihnen stehen laut den Bestimmungen der DSGVO und des
            österreichischen Datenschutzgesetzes (DSG) grundsätzlich die
            folgende Rechte zu:
          </Typography>
          <ul>
            <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
            <li>
              Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17
              DSGVO)
            </li>
            <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
            <li>
              Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang
              mit der Berichtigung oder Löschung personenbezogener Daten oder
              der Einschränkung der Verarbeitung (Artikel 19 DSGVO)
            </li>
            <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
            <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
            <li>
              Recht, nicht einer ausschließlich auf einer automatisierten
              Verarbeitung — einschließlich Profiling — beruhenden Entscheidung
              unterworfen zu werden (Artikel 22 DSGVO)
            </li>
          </ul>
          <Typography variant="body1">
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
            Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche
            sonst in einer Weise verletzt worden sind, können Sie sich bei der
            Aufsichtsbehörde beschweren, welche in Österreich die
            Datenschutzbehörde ist, deren Webseite Sie unter
            https://www.dsb.gv.at/ finden.
          </Typography>
          <Typography variant="h3" className={classes.wordBreak}>
            Auswertung des Besucherverhaltens
          </Typography>
          <Typography variant="body1">
            In der folgenden Datenschutzerklärung informieren wir Sie darüber,
            ob und wie wir Daten Ihres Besuchs dieser Website auswerten. Die
            Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir
            können von Ihrem Verhalten auf dieser Website nicht auf Ihre Person
            schließen.
            <br />
            <br />
            Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu
            widersprechen erfahren Sie in der folgenden Datenschutzerklärung.
          </Typography>
          <Typography variant="h3" className={classes.wordBreak}>
            Google Analytics Datenschutzerklärung
          </Typography>
          <Typography variant="body1">
            Wir verwenden auf unserer Website das Analyse-Tracking Tool Google
            Analytics (GA) des amerikanischen Unternehmens Google LLC (1600
            Amphitheatre Parkway Mountain View, CA 94043, USA). Google Analytics
            sammelt Daten über Ihre Handlungen auf unserer Website. Wenn Sie
            beispielsweise einen Link anklicken, wird diese Aktion in einem
            Cookie gespeichert und an Google Analytics versandt. Mithilfe der
            Berichte, die wir von Google Analytics erhalten, können wir unsere
            Website und unser Service besser an Ihre Wünsche anpassen. Im
            Folgenden gehen wir näher auf das Tracking Tool ein und informieren
            Sie vor allem darüber, welche Daten gespeichert werden und wie Sie
            das verhindern können.
          </Typography>
          <Typography variant="h4" className={classes.wordBreak}>
            Welche Daten werden von Google Analytics gespeichert?
          </Typography>
          <Typography variant="body1">
            Google Analytics erstellt mithilfe eines Tracking-Codes eine
            zufällige, eindeutige ID, die mit Ihrem Browser-Cookie verbunden
            ist. So erkennt Sie Google Analytics als neuen User. Wenn Sie das
            nächste Mal unsere Seite besuchen, werden Sie als „wiederkehrender“
            User erkannt. Alle gesammelten Daten werden gemeinsam mit dieser
            User-ID gespeichert. So ist es überhaupt erst möglich pseudonyme
            Userprofile auszuwerten.
            <br />
            <br />
            Durch Kennzeichnungen wie Cookies und App-Instanz-IDs werden Ihre
            Interaktionen auf unserer Website gemessen. Interaktionen sind alle
            Arten von Handlungen, die Sie auf unserer Website ausführen. Wenn
            Sie auch andere Google-Systeme (wie z.B. ein Google-Konto) nützen,
            können über Google Analytics generierte Daten mit
            Drittanbieter-Cookies verknüpft werden. Google gibt keine Google
            Analytics-Daten weiter, außer wir als Websitebetreiber genehmigen
            das. Zu Ausnahmen kann es kommen, wenn es gesetzlich erforderlich
            ist.
          </Typography>
          <Typography variant="h4" className={classes.wordBreak}>
            Wie kann ich meine Daten löschen bzw. die Datenspeicherung
            verhindern?
          </Typography>
          <Typography variant="body1">
            Nach dem Datenschutzrecht der Europäischen Union haben Sie das
            Recht, Auskunft über Ihre Daten zu erhalten, sie zu aktualisieren,
            zu löschen oder einzuschränken. Mithilfe des Browser-Add-ons zur
            Deaktivierung von Google Analytics-JavaScript (ga.js, analytics.js,
            dc.js) verhindern Sie, dass Google Analytics Ihre Daten verwendet.
            Das Browser-Add-on können Sie unter
            https://tools.google.com/dlpage/gaoptout?hl=de runterladen und
            installieren. Beachten Sie bitte, dass durch dieses Add-on nur die
            Datenerhebung durch Google Analytics deaktiviert wird.
            <br />
            <br />
            Falls Sie grundsätzlich Cookies (unabhängig von Google Analytics)
            deaktivieren, löschen oder verwalten wollen, gibt es für jeden
            Browser eine eigene Anleitung:
          </Typography>
          <Typography variant="h3" className={classes.wordBreak}>
            Google Analytics IP-Anonymisierung
          </Typography>
          <Typography variant="body1">
            Wir haben auf dieser Webseite die IP-Adressen-Anonymisierung von
            Google Analytics implementiert. Diese Funktion wurde von Google
            entwickelt, damit diese Webseite die geltenden
            Datenschutzbestimmungen und Empfehlungen der lokalen
            Datenschutzbehörden einhalten kann, wenn diese eine Speicherung der
            vollständigen IP-Adresse untersagen. Die Anonymisierung bzw.
            Maskierung der IP findet statt, sobald die IP-Adressen im Google
            Analytics-Datenerfassungsnetzwerk eintreffen und bevor eine
            Speicherung oder Verarbeitung der Daten stattfindet.
            <br />
            <br />
            Mehr Informationen zur IP-Anonymisierung finden Sie auf
            https://support.google.com/analytics/answer/2763052?hl=de.
            <br />
            <br />
            Quelle: Erstellt mit dem Datenschutz Generator von
            firmenwebseiten.at in Kooperation mit wallentin.cc
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
