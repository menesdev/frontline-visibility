"use client";

import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft, Mail, Lock, User, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LoginPage = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col overflow-hidden">
            {/* Animated background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(117, 251, 76, 0.12), transparent)`,
                    }}
                />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(ellipse 60% 40% at 80% 80%, rgba(210, 46, 156, 0.08), transparent)`,
                    }}
                />
                <div
                    className="absolute inset-0 opacity-15"
                    style={{
                        background: `radial-gradient(ellipse 50% 60% at 0% 60%, rgba(117, 251, 76, 0.06), transparent)`,
                    }}
                />
            </div>

            {/* Noise texture */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Header */}
                <header className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
                    <Link href="/" className="flex items-center gap-2 group">
                        <img src="/logo_03.png" alt="Logo" className="h-12 w-auto" />
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Ana Sayfaya Dön
                    </Link>
                </header>

                {/* Main content */}
                <main className="flex-1 flex items-center justify-center px-4 py-12">
                    <div className="w-full max-w-md">
                        {/* Card */}
                        <div className="relative rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden">
                            {/* Top glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#75fb4c]/40 to-transparent" />

                            <div className="p-8">
                                {/* Heading */}
                                <div className="text-center mb-8">
                                    <h1 className="text-2xl font-bold text-white mb-2">
                                        {activeTab === 'login' ? 'Hoş Geldiniz' : 'Hesap Oluştur'}
                                    </h1>
                                    <p className="text-sm text-white/50">
                                        {activeTab === 'login'
                                            ? 'Hesabınıza giriş yapın'
                                            : 'Ücretsiz denemenize başlayın'}
                                    </p>
                                </div>

                                {/* Tabs */}
                                <div className="flex rounded-xl bg-white/5 border border-white/10 p-1 mb-8">
                                    <button
                                        id="tab-login"
                                        onClick={() => setActiveTab('login')}
                                        className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'login'
                                                ? 'bg-[#75fb4c] text-[#050505] shadow-lg shadow-[#75fb4c]/20'
                                                : 'text-white/50 hover:text-white'
                                            }`}
                                    >
                                        Giriş Yap
                                    </button>
                                    <button
                                        id="tab-signup"
                                        onClick={() => setActiveTab('signup')}
                                        className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'signup'
                                                ? 'bg-[#75fb4c] text-[#050505] shadow-lg shadow-[#75fb4c]/20'
                                                : 'text-white/50 hover:text-white'
                                            }`}
                                    >
                                        Kayıt Ol
                                    </button>
                                </div>

                                {/* Google Sign In */}
                                <button
                                    id="btn-google"
                                    className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm text-white/70 hover:text-white mb-6 group"
                                >
                                    <Chrome className="w-4 h-4" />
                                    Google ile {activeTab === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
                                </button>

                                {/* Divider */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex-1 h-px bg-white/10" />
                                    <span className="text-xs text-white/30">veya e-posta ile</span>
                                    <div className="flex-1 h-px bg-white/10" />
                                </div>

                                {/* Login Form */}
                                {activeTab === 'login' && (
                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        {/* Email */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs text-white/50 font-medium uppercase tracking-wide">
                                                E-posta
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                <input
                                                    id="login-email"
                                                    type="email"
                                                    placeholder="ornek@sirket.com"
                                                    value={loginForm.email}
                                                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 focus:bg-white/8 transition-all duration-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Password */}
                                        <div className="space-y-1.5">
                                            <div className="flex items-center justify-between">
                                                <label className="text-xs text-white/50 font-medium uppercase tracking-wide">
                                                    Şifre
                                                </label>
                                                <button
                                                    type="button"
                                                    className="text-xs text-[#75fb4c]/70 hover:text-[#75fb4c] transition-colors duration-300"
                                                >
                                                    Şifremi unuttum
                                                </button>
                                            </div>
                                            <div className="relative">
                                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                <input
                                                    id="login-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="••••••••"
                                                    value={loginForm.password}
                                                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                                                    className="w-full pl-10 pr-11 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 transition-all duration-300"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                                                >
                                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </div>

                                        <Button
                                            id="btn-login-submit"
                                            type="submit"
                                            className="w-full py-3 bg-[#75fb4c] text-[#050505] font-semibold hover:bg-[#75fb4c]/90 transition-all duration-300 shadow-lg shadow-[#75fb4c]/20 rounded-xl mt-2"
                                        >
                                            Giriş Yap
                                        </Button>
                                    </form>
                                )}

                                {/* Signup Form */}
                                {activeTab === 'signup' && (
                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        {/* Name */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs text-white/50 font-medium uppercase tracking-wide">
                                                Ad Soyad
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                <input
                                                    id="signup-name"
                                                    type="text"
                                                    placeholder="Adınız Soyadınız"
                                                    value={signupForm.name}
                                                    onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 transition-all duration-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs text-white/50 font-medium uppercase tracking-wide">
                                                E-posta
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                <input
                                                    id="signup-email"
                                                    type="email"
                                                    placeholder="ornek@sirket.com"
                                                    value={signupForm.email}
                                                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 transition-all duration-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Password */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs text-white/50 font-medium uppercase tracking-wide">
                                                Şifre
                                            </label>
                                            <div className="relative">
                                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                <input
                                                    id="signup-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="En az 8 karakter"
                                                    value={signupForm.password}
                                                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                                                    className="w-full pl-10 pr-11 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 transition-all duration-300"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                                                >
                                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Confirm Password */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs text-white/50 font-medium uppercase tracking-wide">
                                                Şifre Tekrar
                                            </label>
                                            <div className="relative">
                                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                <input
                                                    id="signup-confirm-password"
                                                    type={showConfirmPassword ? 'text' : 'password'}
                                                    placeholder="Şifrenizi tekrar girin"
                                                    value={signupForm.confirmPassword}
                                                    onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                                                    className="w-full pl-10 pr-11 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 transition-all duration-300"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                                                >
                                                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-xs text-white/30">
                                            Kaydolarak{' '}
                                            <span className="text-[#75fb4c]/60 cursor-pointer hover:text-[#75fb4c]">Kullanım Koşulları</span>
                                            {' '}ve{' '}
                                            <span className="text-[#75fb4c]/60 cursor-pointer hover:text-[#75fb4c]">Gizlilik Politikası</span>
                                            'nı kabul etmiş olursunuz.
                                        </p>

                                        <Button
                                            id="btn-signup-submit"
                                            type="submit"
                                            className="w-full py-3 bg-[#75fb4c] text-[#050505] font-semibold hover:bg-[#75fb4c]/90 transition-all duration-300 shadow-lg shadow-[#75fb4c]/20 rounded-xl mt-2"
                                        >
                                            Hesap Oluştur
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Bottom text */}
                        <p className="text-center text-sm text-white/30 mt-6">
                            {activeTab === 'login' ? 'Hesabınız yok mu?' : 'Zaten hesabınız var mı?'}{' '}
                            <button
                                onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
                                className="text-[#75fb4c]/70 hover:text-[#75fb4c] transition-colors"
                            >
                                {activeTab === 'login' ? 'Kayıt Ol' : 'Giriş Yap'}
                            </button>
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LoginPage;
