'use client';
import {useState} from 'react';
import {Heart,Share2,ShieldCheck,Clock3,Users,ChevronRight,CheckCircle2,MapPin} from 'lucide-react';

const donors=[
 {name:'Hamba Allah',amount:'Rp500.000',note:'Semoga dimudahkan dan diberi kekuatan.',time:'3 menit lalu'},
 {name:'Rizky Ramadhan',amount:'Rp100.000',note:'Semoga targetnya segera tercapai.',time:'15 menit lalu'},
 {name:'Siti Aisyah',amount:'Rp250.000',note:'Semoga bantuan ini membawa manfaat.',time:'35 menit lalu'},
 {name:'Keluarga Besar Peduli',amount:'Rp1.000.000',note:'Bismillah, semoga sedikit membantu.',time:'1 jam lalu'}
];

export default function Home(){
 const [tab,setTab]=useState('cerita');
 const [copied,setCopied]=useState(false);
 const copy=async()=>{try{await navigator.clipboard.writeText(location.href)}catch{} setCopied(true);setTimeout(()=>setCopied(false),1500)};
 const openDonate=()=>document.getElementById('payment')?.showModal();
 return <main>
  <header className="top"><div className="brand"><span className="mark">RP</span><span>Ruang Peduli</span></div><button className="ghost" onClick={copy}>{copied?<CheckCircle2/>:<Share2/>}<span>{copied?'Tersalin':'Bagikan'}</span></button></header>

  <section className="wrap campaignHead">
   <div className="eyebrow">GALANG DANA • TERVERIFIKASI</div>
   <h1>Bantu Rafy melewati masa sulit dan kembali memenuhi kebutuhan hariannya.</h1>
   <p className="lead">Dukungan difokuskan untuk kebutuhan pangan, biaya hidup mendesak, dan persiapan keluarga. Perkembangan bantuan ditampilkan secara terbuka.</p>
  </section>

  <section className="wrap campaignGrid">
   <div className="visual">
    <img src="/rafy-hero.png" alt="Foto utama penggalangan dana Rafy"/>
    <div className="visualCaption"><span><MapPin/> Jakarta</span><span>Foto penggalangan dana</span></div>
   </div>
   <aside className="donateCard">
    <div className="identity compact"><div className="avatar">RH</div><div><small>Penggalangan dana untuk</small><h2>Rafy Hamadillah</h2><p>oleh keluarga & rekan</p></div></div>
    <div className="raised"><small>Dana terkumpul</small><h2>Rp15.000.000</h2><p>dari target Rp50.000.000</p></div>
    <div className="bar"><span/></div><div className="barMeta"><b>30% tercapai</b><span>24 hari lagi</span></div>
    <div className="stats"><div><Users/><span><b>1.248</b><small>Donatur</small></span></div><div><Clock3/><span><b>24 hari</b><small>Sisa waktu</small></span></div></div>
    <button className="primary" onClick={openDonate}><Heart/>Donasi sekarang</button>
    <button className="secondary" onClick={copy}><Share2/>Bagikan penggalangan</button>
    <div className="trust"><ShieldCheck/><p><b>Transparansi bantuan</b><br/><span>Identitas, cerita, dan tujuan penggunaan dana perlu diverifikasi sebelum menerima transaksi nyata.</span></p></div>
   </aside>
  </section>

  <section className="wrap contentGrid">
   <article className="storyCard">
    <div className="tabs"><button className={tab==='cerita'?'active':''} onClick={()=>setTab('cerita')}>Cerita</button><button className={tab==='update'?'active':''} onClick={()=>setTab('update')}>Kabar terbaru</button><button className={tab==='donatur'?'active':''} onClick={()=>setTab('donatur')}>Donatur</button></div>
    {tab==='cerita'&&<div className="copy"><h3>Tentang penggalangan dana ini</h3><p>Beberapa waktu terakhir, Rafy sedang menghadapi tekanan biaya hidup sambil mempersiapkan rencana pernikahan. Penggalangan dana ini dibuat untuk membantu kebutuhan dasar agar kesehatan dan kebutuhan hariannya tetap terjaga.</p><blockquote>“Bantuan sekecil apa pun akan kami gunakan dengan hati-hati untuk kebutuhan yang benar-benar penting.”</blockquote><h3>Prioritas penggunaan dana</h3><p>Kebutuhan pangan harian, biaya hidup mendesak, dan dukungan persiapan keluarga. Pembaruan penggunaan dana dapat ditambahkan secara berkala pada bagian kabar terbaru.</p></div>}
    {tab==='update'&&<div className="copy"><h3>Kabar terbaru</h3><div className="update"><b>13 Oktober 2026</b><p>Penggalangan dana dibuka. Informasi perkembangan dan penggunaan bantuan akan diperbarui di halaman ini.</p></div></div>}
    {tab==='donatur'&&<div className="donors">{donors.map((d,i)=><div className="donor" key={i}><div className="mini">{d.name[0]}</div><div><b>{d.name}</b><p>“{d.note}”</p><small>{d.time}</small></div><strong>{d.amount}</strong></div>)}</div>}
   </article>
   <div className="sideNote"><div className="eyebrow">PENGGUNAAN DANA</div><h3>Fokus pada kebutuhan yang paling mendesak.</h3><p>Halaman ini dirancang sederhana agar calon donatur bisa memahami tujuan bantuan, progres, dan pembaruan tanpa distraksi visual yang berlebihan.</p></div>
  </section>

  <section className="wrap section"><div><div className="eyebrow">DONATUR TERBARU</div><h2>Orang-orang yang ikut membantu</h2></div><button className="textBtn" onClick={()=>{setTab('donatur');document.querySelector('.storyCard')?.scrollIntoView({behavior:'smooth'})}}>Lihat semua <ChevronRight/></button><div className="donorGrid">{donors.slice(0,3).map((d,i)=><div className="donorSimple" key={i}><span className="mini">{d.name[0]}</span><div><b>{d.name}</b><p>{d.note}</p><strong>{d.amount}</strong></div></div>)}</div></section>

  <footer><div className="wrap"><b>Ruang Peduli</b><p>Prototype halaman donasi. Hubungkan payment gateway, database, webhook, dan proses verifikasi sebelum digunakan untuk transaksi nyata.</p></div></footer>

  <dialog id="payment"><button className="close" onClick={()=>document.getElementById('payment')?.close()}>×</button><div className="eyebrow">DONASI</div><h2>Pilih nominal bantuan</h2><div className="amounts"><button>Rp50.000</button><button>Rp100.000</button><button>Rp250.000</button><button>Rp500.000</button></div><label>Nominal lainnya<input placeholder="Rp" inputMode="numeric"/></label><label>Nama donatur<input placeholder="Nama atau Hamba Allah"/></label><button className="primary" onClick={()=>alert('Demo UI — sambungkan payment gateway untuk transaksi nyata.')}>Lanjutkan pembayaran</button><small>Demo UI. Belum memproses pembayaran nyata.</small></dialog>
 </main>
}
