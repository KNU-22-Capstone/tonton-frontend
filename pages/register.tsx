import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const register = () => {
  const [email, setEmail] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordChk, setPasswordChk] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const emailCheck = (email: string) => {
    const re =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    if (re.test(email)) {
      console.log("이메일의 형식이 맞습니다!");
    } else {
      console.log("이메일 형식이 다릅니다!");
    }
  };

  const idCheck = (id: string) => {
    
  }

  const passwordDoubleCheck = (password: string, passwordChk: string) => {
    if (password !== passwordChk) {
      console.log("비밀번호와 비밀번호 확인이 다릅니다!");
      return;
    } else {
      console.log("비밀번호와 비밀번호의 확인이 동일합니다!");
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    emailCheck(e.target.value);
    console.log(email);
  };

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangePasswordChk = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(password, passwordChk);
    setPasswordChk(e.target.value);
    passwordDoubleCheck(password, e.target.value);
  };
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>TONTON - 회원가입</title>
      </Head>

      <section className="bg-gray-50 dark:bg-gray-900 font-Pretendard">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="/"
            className="text-xl font-bold leading-tight tracking-tight text-slate-900 md:text-2xl dark:text-white text-center pb-5"
          >
            코디위키 - TONTON
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    이메일
                  </label>
                  <input
                    onChange={onChangeEmail}
                    type="email"
                    name="email"
                    id="email"
                    className={
                      "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                    placeholder="이메일 주소"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    아이디
                  </label>
                  <div className="flex">
                    <input
                      onChange={onChangeId}
                      type="text"
                      name="id"
                      id="id"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="아이디"
                      required
                    />
                    <button className="ml-2 text-bold w-1/3 text-center bg-slate-900 text-white rounded-lg">
                      중복 확인
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호
                  </label>
                  <input
                    onChange={onChangePassword}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="비밀번호"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호 확인
                  </label>
                  <input
                    onChange={onChangePasswordChk}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="비밀번호 확인"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    닉네임
                  </label>
                  <input
                    onChange={onChangeNickname}
                    type="text"
                    name="nickname"
                    id="nickname"
                    placeholder="닉네임"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-slate-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  회원가입
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default register;
