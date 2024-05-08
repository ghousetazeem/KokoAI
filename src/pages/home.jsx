import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
export function Home() {
  const handleGetStarted = () => {
    const contactUs = document.getElementById("contactus")
    contactUs.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black mt-12"
              >
                Experience the Future AI Receptionist With <span className="text-red-900"> KOKO
                </span>  AI
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 mt-0">
                Boost your front desk with our AI Receptionist for better customer service and smoother operations.
              </Typography>
              <button onClick={handleGetStarted} variant="gradient" size="sm" fullWidth className="p-4 text-white bg-red-900 mt-6 rounded-sm pt-2 pb-2">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}
      <section id="services" className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Build With AI" heading="Services we provide">
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <div>

            <section id="aboutus" className="-mt-32 bg-white px-4 pb-20 pt-4">
              <div className="mt-32 mb-32 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                    <FingerPrintIcon className="h-8 w-8 text-white " />
                  </div>
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    Working with us is a pleasure
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                    Don't let your uses guess by attaching tooltips and popoves to
                    any element. Just make sure you enable them first via
                    JavaScript.
                    <br />
                    <br />
                    The kit comes with three pre-built pages to help you get started
                    faster. You can change the text and images and you're good to
                    go. Just make sure you enable them first via JavaScript.
                  </Typography>
                  <Button variant="filled">read more</Button>
                </div>
                <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                  <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                    <CardHeader floated={false} className="relative h-56">
                      <img
                        alt="Card Image"
                        src="/img/teamwork.png"
                        className="h-full w-full"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-3 mt-2 font-bold"
                      >
                        Top Notch Services
                      </Typography>
                      <Typography className="font-normal text-blue-gray-500">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="container mx-auto mb-32" id="plans">
                <PageTitle heading="KOKO AI Plans" className="mt-32">
                  According to the National Oceanic and Atmospheric Administration,
                  Ted, Scambos, NSIDClead scentist, puts the potentially record
                  maximum.
                </PageTitle>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {featuresData.map(({ color, title, icon, description }) => (
                    <FeatureCard
                      key={title}
                      color={color}
                      title={title}
                      icon={React.createElement(icon, {
                        className: "w-5 h-5 text-white",
                      })}
                      description={description}
                    />
                  ))}
                </div>

              </div>
            </section>
            <section id="pricing" class="bg-white">
        <div class="container">
            <h2 class="text-center">PRICING</h2>
            <div class="spacer spacer-line border-primary">&nbsp;</div>
            <div class="spacer">&nbsp;</div>
            <div class="row">
                <div class="col-md-4">
                    <div class="pricing-table">
                        <div class="pricing-table-title">
                            <h5 class="pricing-title bg-info-hover text-white">STARTER</h5>
                        </div>
                        <div class="pricing-table-price text-center bg-info">
                            <p class="title-font">
                                <span class="pricing-period text-white mr-1">From</span>
                                <span class="pricing-currency text-white">$</span>
                                <span class="pricing-price text-white">9.99</span>
                                <span class="pricing-period text-white">/ Mo.</span>
                            </p>
                        </div>
                        <div class="pricing-table-content">
                            <ul>
                                <li><strong>Basic Package</strong></li>
                                <li><strong>1 Intermediate</strong></li>
                                <li><strong>Business Start</strong></li>
                                <li><strong><del>Professional Features</del></strong></li>
                                <li><strong><del>Extra Options</del></strong></li>
                                <li><strong>24/7 Support</strong></li>
                            </ul>
                            <div class="pricing-table-button">
                                <a href="#x" class="btn btn-info"><span>Request Quote</span></a>
                            </div>
                        </div>
                    </div>
                </div>

               <div class="col-md-4">
                    <div class="pricing-table bg-lightgrey">
                        <div class="pricing-table-title">
                            <h5 class="pricing-title bg-primary-hover text-white">BUSINESS</h5>
                        </div>
                        <div class="pricing-table-price text-center bg-primary">
                            <p class="title-font">
                                <span class="pricing-period text-white mr-1">From</span>
                                <span class="pricing-currency text-white">$</span>
                                <span class="pricing-price text-white">29.99</span>
                                <span class="pricing-period text-white">/ Mo.</span>
                            </p>
                        </div>
                        <div class="pricing-table-content">
                            <ul>
                                <li><strong>Management Package</strong></li>
                                <li><strong>1 Professional</strong></li>
                                <li><strong>Business Professional</strong></li>
                                <li><strong>Professional Features</strong></li>
                                <li><strong><del>Extra Options</del></strong></li>
                                <li><strong>24/7 Support</strong></li>
                            </ul>
                          
                                <a href="#x" class="btn btn-primary"><span>Request Quote</span></a>
            
                        </div>
                    </div> 
                </div>
                <div class="col-md-4">
                    <div class="pricing-table">
                        <div class="pricing-table-title">
                            <h5 class="pricing-title bg-info-hover text-white">ENTERPRISE</h5>
                        </div>
                        <div class="pricing-table-price text-center bg-info">
                            <p class="title-font">
                                <span class="pricing-period text-white mr-1">From</span>
                                <span class="pricing-currency text-white">$</span>
                                <span class="pricing-price text-white">49.99</span>
                                <span class="pricing-period text-white">/ Mo.</span>
                            </p>
                        </div>
                        <div class="pricing-table-content">
                            <ul>
                                <li><strong>Business Package</strong></li>
                                <li><strong>Up to 4 Professionals</strong></li>
                                <li><strong>Enterprise Professional</strong></li>
                                <li><strong>Professional Features</strong></li>
                                <li><strong>Extra Options</strong></li>
                                <li><strong>24/7 Support</strong></li>
                            </ul>
                            <div class="pricing-table-button">
                                <a href="#x" class="btn btn-info"><span>Request Quote</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
          </div>
          <div id="contactus">
            <PageTitle section="Contact Us" heading="Want to work with us?" >
              Complete this form and we will get back to you in 24 hours.
            </PageTitle>
          </div>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
     
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
