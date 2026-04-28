<script setup lang="ts">
import { withBase } from "vitepress";

const pages = import.meta.glob("../../../**/*.md", { eager: true });
const paths = Object.keys(pages).map((path) => path.replace(/\\/g, "/"));

function countByPrefixes(prefixes: string[]) {
  return paths.filter((path) => prefixes.some((prefix) => path.includes(prefix))).length;
}

function link(path: string) {
  return withBase(path);
}

const counts = {
  frontend: countByPrefixes(["/frontend/"]),
  backend: countByPrefixes(["/backend/"]),
  leetcode: countByPrefixes(["/leetcode/"]),
  review: countByPrefixes(["/misc/", "/interview/", "/resources/", "/roadmap/"]),
};
</script>

<template>
  <main class="notes-home">
    <section class="notes-hero">
      <div class="notes-hero-copy">
        <p class="notes-kicker">Personal Learning Workspace</p>
        <h1>Study Notes</h1>
        <p class="notes-subtitle">
          &#29992;&#19987;&#39064;&#12289;&#20195;&#30721;&#12289;&#39064;&#35299;&#21644;&#22797;&#30424;&#25226;&#23398;&#20064;&#36807;&#31243;&#27785;&#28196;&#25104;&#21487;&#26816;&#32034;&#12289;&#21487;&#22797;&#36848;&#12289;&#21487;&#38754;&#35797;&#30340;&#30693;&#35782;&#36164;&#20135;&#12290;
        </p>

        <div class="notes-hero-actions">
          <a class="notes-primary" :href="link('/frontend/handwriting/')">&#32487;&#32493;&#23398;&#20064;</a>
          <a class="notes-secondary" :href="link('/roadmap/')">&#26597;&#30475;&#36335;&#32447;</a>
        </div>
      </div>
    </section>

    <section class="notes-board" aria-label="Knowledge categories">
      <article class="notes-card notes-card-blue">
        <header>
          <span class="notes-icon">FE</span>
          <span class="notes-count">{{ counts.frontend }} &#31687;</span>
        </header>
        <h2>&#21069;&#31471;</h2>
        <p>&#27983;&#35272;&#22120;&#12289;&#26694;&#26550;&#12289;&#24037;&#31243;&#21270;&#12289;&#25163;&#25749;&#20195;&#30721;&#21644;&#38754;&#35797;&#34920;&#36798;&#12290;</p>
        <nav class="notes-tags" aria-label="Frontend categories">
          <a :href="link('/frontend/handwriting/')">Handwrite</a>
          <a :href="link('/frontend/bagu/')">&#21069;&#31471;&#20843;&#32929;</a>
          <a :href="link('/frontend/')">Vue / Browser</a>
          <a :href="link('/frontend/')">Project Review</a>
        </nav>
        <a class="notes-card-link" :href="link('/frontend/')">&#36827;&#20837;&#21069;&#31471;</a>
      </article>

      <article class="notes-card notes-card-green">
        <header>
          <span class="notes-icon">BE</span>
          <span class="notes-count notes-count-green">{{ counts.backend }} &#31687;</span>
        </header>
        <h2>&#21518;&#31471;</h2>
        <p>&#26381;&#21153;&#12289;&#25509;&#21475;&#12289;&#25968;&#25454;&#12289;&#32531;&#23384;&#12289;&#37096;&#32626;&#19982;&#31283;&#23450;&#24615;&#35774;&#35745;&#12290;</p>
        <nav class="notes-tags" aria-label="Backend categories">
          <a :href="link('/backend/')">Node Service</a>
          <a :href="link('/backend/')">API Design</a>
          <a :href="link('/backend/')">Database</a>
          <a :href="link('/backend/')">Deploy</a>
        </nav>
        <a class="notes-card-link" :href="link('/backend/')">&#36827;&#20837;&#21518;&#31471;</a>
      </article>

      <article class="notes-card notes-card-red">
        <header>
          <span class="notes-icon">LC</span>
          <span class="notes-count notes-count-red">{{ counts.leetcode }} &#31687;</span>
        </header>
        <h2>Leetcode</h2>
        <p>&#39064;&#21333;&#12289;&#27169;&#26495;&#12289;&#38169;&#39064;&#12289;&#22797;&#26434;&#24230;&#21644;&#20108;&#21047;&#22797;&#30424;&#12290;</p>
        <nav class="notes-tags" aria-label="Leetcode categories">
          <a :href="link('/leetcode/')">&#28789;&#31070;&#31639;&#27861;</a>
          <a :href="link('/leetcode/')">&#21160;&#24577;&#35268;&#21010;</a>
          <a :href="link('/leetcode/')">&#20108;&#21449;&#26641;</a>
          <a :href="link('/leetcode/')">&#21452;&#25351;&#38024;</a>
        </nav>
        <a class="notes-card-link" :href="link('/leetcode/')">&#36827;&#20837;&#39064;&#21333;</a>
      </article>

      <article class="notes-card notes-card-slate">
        <header>
          <span class="notes-icon">RB</span>
          <span class="notes-count notes-count-slate">{{ counts.review }} &#31687;</span>
        </header>
        <h2>&#22797;&#30424;</h2>
        <p>&#38754;&#35797;&#35760;&#24405;&#12289;&#38405;&#35835;&#24635;&#32467;&#12289;&#24037;&#20855;&#28165;&#21333;&#21644;&#38454;&#27573;&#22238;&#39038;&#12290;</p>
        <nav class="notes-tags" aria-label="Review categories">
          <a :href="link('/interview/')">Interview</a>
          <a :href="link('/resources/')">Tools</a>
          <a :href="link('/misc/')">Books</a>
          <a :href="link('/roadmap/')">Roadmap</a>
        </nav>
        <a class="notes-card-link" :href="link('/misc/')">&#36827;&#20837;&#22797;&#30424;</a>
      </article>
    </section>
  </main>
</template>
