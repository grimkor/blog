import React from "react";
import { NextPage } from "next";
import matter from "gray-matter";
import Post from "../../components/blog/post";
import { PostInterface } from "../../types";

interface BlogPostProps {
  data: PostInterface;
}

const BlogPost: NextPage<BlogPostProps> = (props) => {
  console.log(props);
  return <Post data={props.data} />;
};

BlogPost.getInitialProps = async (context): Promise<BlogPostProps> => {
  const text = `---
title: "Hello World"
date: "2020-01-07"
---

Lorem markdownum nostri [et](http://www.intertollit.org/illadeam) viderat,
catenis quos sinistra simul vera est cadit, laurus! Campo tu Troia; vultus abire
ait, et vultus tandem mentitus; humo consuescit. Colla quae est conataque
comprenditur omnes!

  \`\`\`
  if (dot_error(dataSymbolic, dvd_monitor_meta, printer_view_website /
            boolean)) {
        iscsiVirusCopyright.font_mysql = data_wireless_on(link,
                post_printer.storageBmp(inbox, 1), pipeline_wireless_stack);
    } else {
        pmuStandaloneBar.basicDataDvr.navigation(nullRing, 5);
        trinitron_stack -= motherboard(parse(microcomputer));
        middleware(41, lpi_metal.ajax_olap.reality_development_dlc(hard_system,
                webRecursive, 1), link);
    }
    var lpiServer = hardDataDvd * managementPassiveResolution.ldapBrowserPath(
            ecc_nas_cursor);
    if (systemEncodingPython >= unicodeVariableAddress + ipTebibyte) {
        firewallJquery.hdd.sshEmoticonDot(eide, 1);
    } else {
        logUnfriend(xp / spreadsheetYahoo, linux(4, ics));
        smartphoneShell.maximize(denial_bash_data, balance - apache);
    }
    var integer = 5 + lock_drag_macintosh + expression;
    dial_optical = firewall + smmPermalinkBar;
\`\`\`



## Quod bubo est

Sorori sustulit sustulit dum adlevat vetusto est, sua comae *vel longoque
volucris*. Nullus [ipse](http://ceae.io/quaeque.html), nec indicium de moveat
nodosaque solutum.

**per** aram nigra fortibus *in tyranni* abstinuit et quique! Undas uno doleam
uti pecoris cupidine a volat indicio carinae Memnonis sequentia ferunt mare fuit
piaeque! Candidus move Gryneus *ire sit* annis, diva pugnandi, vix.

> Aquis tempore, nec totum oris, dea moriens; si diu usque duos male. Ad matrem
> levare conspicui adpellare et cavata notam tulimus gemino iram fibris,
> [sed](http://www.est.io/). **Effigiem quod**, mors voce medio nec legar et
> sola.

## Bibulaque motu

Meus dabit nomenque, fallere causae concurreret cavari me fecit curvique
fluidove. Capillo non est dat erratica ausae, laetus cuius Ianthe, vellet tellus
protectum vita est et geminas ictus. Erravit est in non greges uterum et qui
Elateius socios. Haurit ferinas funesta dente concipit causam, dubito aequora
**iamque aevi** gemitus inferre. Haemonio Aurorae.

> *Quaeque* erat quondam, docet: fuit Pactolides referuntur Eurotas tenebroso.
> Maerens vulnere Claros, peto rapido, pondus stipata premens, in homines subit
> obstantes nec.

Fontis silvasque cum prohibent potes *sed* curat curaliis virgae. Divellere
[lumina cadentum](http://www.quo-iam.net/sollicitataconiugis) inhaesit cuncti.
Iunonis longoque redeuntis tamen, **his orbem** divesque [tumulis
turba](http://una-fera.org/tuaest) pollice, iuvenco, subversaque. Cum quod mare
ibi, ait at silvas **coeptas** quae!
### Header 3
This is a text
#### Header 4
This is a text
##### Header 5
This is a text
###### Header 6
This is a text
`;

  // @ts-ignore
  const data: PostInterface = matter(text);
  return { data };
};

export default BlogPost;
