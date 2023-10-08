import Question from "./Question";

import QuestionComponent from "./Question";
import { ReactElement } from "react";

export default function Questions(): ReactElement {
    return (
        <>
            <QuestionComponent
                collapseNum="collapse1"
                title="Che cos&apos;è REFREESH?"
                content="REFREESH è un&apos;innovativa start-up che promuove uno stile di vita sano e sostenibile, offrendo alle aziende la possibilità di promuovere i propri marchi e prodotti su bottiglie di acqua di cartone distribuite gratuitamente ai consumatori."
            />
            <QuestionComponent
                collapseNum="collapse2"
                title="Come funziona REFREESH?"
                content="REFREESH collabora con aziende interessate a promuovere i propri prodotti o marchi. Queste aziende acquistano spazi pubblicitari sulle bottiglie di acqua di cartone, definendo il design e il messaggio pubblicitario. REFREESH produce poi le bottiglie con gli spazi pubblicitari e le distribuisce gratuitamente in diverse location ad alto traffico."
            />
            <QuestionComponent
                collapseNum="collapse3"
                title="Quali materiali vengono utilizzati per le bottiglie d&apos;acqua?"
                content="Le bottiglie di acqua di cartone di REFREESH sono realizzate con materiali ecologici e sostenibili per promuovere la sostenibilità ambientale."
            />
            <QuestionComponent
                collapseNum="collapse4"
                title="Come le aziende possono monitorare l&apos;efficacia delle loro campagne pubblicitarie con REFREESH?"
                content="REFREESH monitora l&apos;efficacia delle campagne pubblicitarie attraverso metriche come l&apos;engagement online, le interazioni sui social media e i dati di vendita delle aziende partner."
            />
            <QuestionComponent
                collapseNum="collapse5"
                title="Quali sono i benefici per le aziende che partecipano a REFREESH?"
                content="Le aziende ottengono visibilità del marchio su un prodotto ampiamente consumato, promuovendo una maggiore consapevolezza del marchio. Inoltre, partecipare a REFREESH può migliorare l&apos;immagine aziendale attraverso l'associazione con la sostenibilità e generare entrate dalla vendita di spazi pubblicitari."
            />
            <QuestionComponent
                collapseNum="collapse6"
                title="Cosa guadagnano i consumatori da REFREESH?"
                content="I consumatori ricevono bottiglie di acqua gratuite, promuovendo uno stile di vita sano e sostenibile. Inoltre, l&apos;uso di bottiglie di cartone promuove una maggiore sostenibilità rispetto alle bottiglie di plastica tradizionali."
            />
        </>
    );
}