const Home = () => {
  return (
    <section class="py-6 bg-primary">
      <div class="mx-auto max-w-7xl px-5 lg:px-0 ">
        <h1 class="text-4xl font-bold my-4 text-center">
          You can go to other pages from here
        </h1>

        <div class="grid grid-cols-2 gap-5 mt-8">
          <div class="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
            <h1 class="text-slate-100 font-bold text-xl">Student Portal</h1>
            <div class="space-y-2 mt-4 flex flex-col">
              <a class="link" href="./StudentPortal/Course Player.html">
                Course Player
              </a>
              <a class="link" href="./StudentPortal/Leaderboard.html">
                Leaderboard
              </a>
              <a class="link" href="./StudentPortal/Quiz.html">
                Quiz
              </a>
              <a class="link" href="./StudentPortal/StudentLogin.html">
                StudentLogin
              </a>
              <a class="link" href="./StudentPortal/StudentReistration.html">
                StudentReistration
              </a>
            </div>
          </div>
          <div class="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
            <h1 class="text-slate-100 font-bold text-xl">Admin Portal</h1>
            <div class="space-y-2 mt-4 flex flex-col">
              <a class="link" href="./Dashboard/Dashboard.html">
                Dashboard
              </a>
              <a class="link" href="./Dashboard/AdminLogin.html">
                AdminLogin
              </a>
              <a class="link" href="./Dashboard/Assignment.html">
                Assignment
              </a>
              <a class="link" href="./Dashboard/AssignmentMark.html">
                AssignmentMark
              </a>
              <a class="link" href="./Dashboard/Quizzes.html">
                Quizzes
              </a>
              <a class="link" href="./Dashboard/Videos.html">
                Videos
              </a>
            </div>
          </div>

          <div class="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
            <h1 class="text-slate-100 font-bold text-xl">Admin Email</h1>
            <div class="space-y-2 mt-4 flex flex-col">
              <p>Email : admin@learnwithsumit.com</p>
              <p>Password : lws@123456</p>
            </div>
          </div>

          <div class="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
            <h1 class="text-slate-100 font-bold text-xl">Student Email</h1>
            <div class="space-y-2 mt-4 flex flex-col">
              <p>Email : akash.ahmed@learnwithsumit.com</p>
              <p>Email : md.salahuddin@learnwithsumit.com</p>
              <p>Email : ferdous.shohag@learnwithsumit.com</p>
              <p>Email : riyadh.vai@learnwithsumit.com</p>
              <p>Email : saad.hasan@learnwithsumit.com</p>
              <p>Password : lws@123456</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
