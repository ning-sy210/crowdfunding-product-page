const App = () => {
  return (
    <div>
      <img src="./images/image-hero-mobile.jpg" title="mobile hero image" />

      <div className="absolute top-0 px-6 flex flex-col gap-y-[164px]">
        <header className="flex items-center justify-between py-5 text-white">
          <h1 className="font-bold text-h2">crowdfund</h1>
          <img src="./images/icon-hamburger.svg" title="hamburger icon"></img>
        </header>
        <main>
          <section className="relative flex flex-col gap-y-5 items-center text-center pt-[50px] px-6 pb-10 bg-white rounded-lg border-[1px] border-slate-200">
            <img
              src="./images/logo-mastercraft.svg"
              title="mastercraft logo"
              className="absolute top-[-28px]"
            />
            <h2 className="px-1 font-bold leading-6 text-h3">
              Mastercraft Bamboo Monitor Riser
            </h2>
            <p className="leading-6 text-h5 text-neutral-2">
              A beautifully handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div className="flex justify-between w-full">
              <button
                type="button"
                className="font-medium text-white rounded-full w-[77%] bg-primary-1 "
              >
                Back this project
              </button>
              <button type="button">
                <img src="./images/icon-bookmark.svg" title="bookmark icon" />
              </button>
            </div>
          </section>

          <section>
            <section>
              <p>$89914</p>
              <p>of $100000 backed</p>
            </section>
            <section>
              <p>5007</p>
              <p>total backers</p>
            </section>
            <section>
              <p>56</p>
              <p>days left</p>
            </section>
            <div></div>
          </section>

          <section>
            <section>
              <h2>About this project</h2>
              <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
              </p>
              <p>
                Featuring artisan craftsmanship, the simplicity of design
                creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand.
              </p>
            </section>
            <section>
              <h3>Bamboo Stand</h3>
              <p>Pledge $25 or more</p>
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you'll be added to a
                special Backer member list.
              </p>
              <p>
                <span>101</span>
                <span>left</span>
              </p>
              <button>Select Reward</button>
            </section>
            <section>
              <h3>Black Edition Stand</h3>
              <p>Pledge $75 or more</p>
              <p>
                You get a Black Special Edition computer stand and a personal
                thank you. You'll be added to our Backer member list. Shipping
                is included.
              </p>
              <p>
                <span>64</span>
                <span>left</span>
              </p>
              <button>Select Reward</button>
            </section>
            <section>
              <h3>Mahogany Special Edition</h3>
              <p>Pledge $200 or more</p>
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You'll be added to our Backer member
                list. Shipping is included.
              </p>
              <p>
                <span>0</span>
                <span>left</span>
              </p>
              <button>Out of Stock</button>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
