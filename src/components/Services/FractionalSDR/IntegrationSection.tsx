import React from 'react';
import {ArrowRight} from 'lucide-react';
interface IntegrationTool {
    name: string;
    description: string;
    icon: React.ReactNode;
    brandColor: string;
}

const TeamIntegration: React.FC = () => {
    const SlackIcon = () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#611f69">
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
    );
    const HubspotIcon = () => (
        <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
        >
            <circle cx="512" cy="512" r="512" fill="#FF7A59" />
            <path
                d="M623.8 624.94c-38.23 0-69.24-30.67-69.24-68.51s31-68.52 69.24-68.52 69.26 30.67 69.26 68.52-31 68.51-69.26 68.51m20.74-200.42v-61a46.83 46.83 0 0 0 27.33-42.29v-1.41c0-25.78-21.32-46.86-47.35-46.86h-1.43c-26 0-47.35 21.09-47.35 46.86v1.41a46.85 46.85 0 0 0 27.33 42.29v61a135.08 135.08 0 0 0-63.86 27.79l-169.1-130.17A52.49 52.49 0 0 0 372 309c0-29.21-23.89-52.92-53.4-53s-53.45 23.59-53.48 52.81 23.85 52.88 53.36 52.93a53.29 53.29 0 0 0 26.33-7.09l166.38 128.1a132.14 132.14 0 0 0 2.07 150.3l-50.62 50.1A43.42 43.42 0 1 0 450.1 768c24.24 0 43.9-19.46 43.9-43.45a42.24 42.24 0 0 0-2-12.42l50-49.52a135.28 135.28 0 0 0 81.8 27.47c74.61 0 135.06-59.83 135.06-133.65 0-66.82-49.62-122-114.33-131.91"
                fill="#ffffff"
                fillRule="evenodd"
            />
        </svg>
    );
    const CheckInIcon = () => (
        <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            fill="none"
        >
            <path
                fill="#72C6EF"
                d="M488.727,197.818v116.364l-46.545,23.273v139.636c0,12.858-10.415,23.273-23.273,23.273h-46.545 c-12.858,0-23.273-10.415-23.273-23.273V337.455l-46.545-23.273V197.818c0-18.851,12.102-38.167,34.909-46.545 c11.055-3.956,23.273-11.636,23.273-11.636c19.316,15.476,50.502,15.476,69.818,0c0,0,23.855,7.68,34.909,11.636 C488.262,159.651,488.727,178.967,488.727,197.818z"
            />
            <path
                fill="#FAA85F"
                d="M58.182,256l11.636-71.61c0,0,0.465-26.589,23.273-33.036c11.055-3.037,23.273-11.718,23.273-11.718 c19.316,11.904,50.502,11.904,69.818,0c0,0,12.218,8.681,23.273,11.729c22.807,6.447,23.273,33.036,23.273,33.036L244.364,256"
            />
            <path
                fill="#ffffff"
                d="M469.376,140.323c-11.171-4.003-35.258-11.764-35.258-11.764c-3.735-1.21-7.808-0.454-10.845,2.001 c-14.976,11.997-40.297,11.997-55.273,0c-3.875-3.107-9.286-3.398-13.463-0.768c-3.107,1.955-12.905,7.633-21.085,10.566 c-25.844,9.484-42.543,32.035-42.543,57.46v46.545h-36.643l-9.926-61.079c-0.535-13.265-7.715-36.329-31.791-43.136 c-7.377-2.036-16.675-7.913-19.642-9.996c-3.793-2.7-8.855-2.863-12.835-0.419c-15.616,9.635-41.996,9.635-57.612,0 c-3.98-2.444-9.03-2.281-12.835,0.419c-2.967,2.095-12.265,7.971-19.7,10.019c-24.017,6.784-31.197,29.847-31.732,43.113 l-9.914,61.079H23.273c-6.435,0-11.636,5.201-11.636,11.636c0,6.435,5.201,11.636,11.636,11.636h267.636v46.545 c0,4.41,2.49,8.436,6.435,10.415l40.111,20.049v132.445c0,19.247,15.663,34.909,34.909,34.909h46.545 c19.247,0,34.909-15.663,34.909-34.909V344.646l40.111-20.061c3.945-1.967,6.435-5.993,6.435-10.403V197.818 C500.364,179.456,500.364,151.692,469.376,140.323z M81.303,186.263c0.093-0.547,0.14-1.105,0.151-1.664 c0-0.186,0.477-18.001,14.732-22.028c7.75-2.141,15.558-6.307,20.771-9.46c20.527,9.414,48.116,9.414,68.631,0 c5.213,3.153,12.998,7.331,20.701,9.449c14.045,3.98,14.778,21.388,14.79,22.051c0.012,0.559,0.058,1.117,0.151,1.664l9.449,58.089 h-21.225v-23.273c0-6.435-5.201-11.636-11.636-11.636s-11.636,5.201-11.636,11.636v23.273h-69.818v-23.273 c0-6.435-5.201-11.636-11.636-11.636c-6.435,0-11.636,5.201-11.636,11.636v23.273H71.866L81.303,186.263z M477.091,306.991 l-23.273,11.636v-74.263c0-6.435-5.201-11.636-11.636-11.636c-6.435,0-11.636,5.201-11.636,11.636v93.091v139.636 c0,6.423-5.213,11.636-11.636,11.636h-11.636V337.455c0-6.435-5.201-11.636-11.636-11.636c-6.435,0-11.636,5.201-11.636,11.636 v151.273h-11.636c-6.423,0-11.636-5.213-11.636-11.636V337.455v-93.091c0-6.435-5.201-11.636-11.636-11.636 s-11.636,5.201-11.636,11.636v74.263l-23.273-11.636V197.818c0-15.558,10.705-29.533,27.194-35.596 c6.807-2.432,13.859-6.063,18.839-8.809c21.644,12.975,51.025,12.672,72.308-0.908c7.657,2.49,21.376,6.993,28.916,9.681 c14.173,5.213,15.651,14.86,15.651,35.631V306.991z"
            />
            <path
                fill="#00384E"
                d="M395.636,116.364c32.081,0,58.182-26.1,58.182-58.182S427.718,0,395.636,0 s-58.182,26.1-58.182,58.182S363.555,116.364,395.636,116.364z M395.636,23.273c19.247,0,34.909,15.663,34.909,34.909 s-15.663,34.909-34.909,34.909c-19.247,0-34.909-15.663-34.909-34.909S376.39,23.273,395.636,23.273z"
            />
            <path
                fill="#00384E"
                d="M151.273,116.364c32.081,0,58.182-26.1,58.182-58.182S183.354,0,151.273,0 S93.091,26.1,93.091,58.182S119.191,116.364,151.273,116.364z M151.273,23.273c19.247,0,34.909,15.663,34.909,34.909 s-15.663,34.909-34.909,34.909s-34.909-15.663-34.909-34.909S132.026,23.273,151.273,23.273z"
            />
            <circle fill="#FFFFFF" cx="395.636" cy="58.182" r="34.909" />
            <circle fill="#FFFFFF" cx="151.273" cy="58.182" r="34.909" />
        </svg>
    );

    const integrationTools: IntegrationTool[] = [
        {
            icon: <SlackIcon />,
            name: "Slack",
            description: "Daily updates, campaign progress, and real-time communication",
            brandColor: "brand-slack",
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Trello-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -760.000000)" fill="#007AC2"> <path d="M206,769 L206,796 C206,797.6575 207.3425,799 209,799 L218,799 C219.6575,799 221,797.6575 221,796 L221,769 C221,767.3425 219.6575,766 218,766 L209,766 C207.3425,766 206,767.3425 206,769 L206,769 Z M227,769 L227,784 C227,785.6575 228.3425,787 230,787 L239,787 C240.6575,787 242,785.6575 242,784 L242,769 C242,767.3425 240.6575,766 239,766 L230,766 C228.3425,766 227,767.3425 227,769 L227,769 Z M206,760 C202.6865,760 200,762.688 200,766 L200,802 C200,805.3135 202.688,808 206,808 L242,808 C245.3135,808 248,805.312 248,802 L248,766 C248,762.6865 245.312,760 242,760 L206,760 Z" id="Trello"> </path> </g> </g> </g></svg>
            ),
            name: "Trello / ClickUp",
            description: "Project management, task tracking, and milestone updates",
            brandColor: "brand-trello",
        },
        {
            icon: (
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"></path><path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"></path><path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"></path><path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"></path></g></svg>
            ),
            name: "Google Workspace",
            description: "Document sharing, calendar scheduling, and collaboration",
            brandColor: "brand-google",
        },
        {
            icon: <HubspotIcon/>,
            name: "Your Existing CRM",
            description: "Lead management and pipeline tracking",
            brandColor: "brand-crm",
        },
        {
            icon: <CheckInIcon/>,
            name: "Regular Check-ins",
            description: "Weekly strategy calls and monthly performance reviews",
            brandColor: "brand-checkins",
        }
    ];


    return (
        <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        <span className="text-primary">Seamless</span> Team Integration
                    </h2>
                    <p className="text-white">
                        Our fractional SDR team becomes an extension of your existing team,
                        working through your preferred tools and communication channels for
                        complete transparency and collaboration.
                    </p>
                </div>
                <div className="mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {integrationTools.slice(0, 3).map((tool) => (
                            <div
                                key={tool.name}
                                className="group relative bg-gradient-card border rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                        {tool.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{tool.description}</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center gap-8 flex-wrap">
                        {integrationTools.slice(3).map((tool) => (
                            <div
                                key={tool.name}
                                className="w-full md:w-[48%] xl:w-[30%] group relative bg-gradient-card border rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                        {tool.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{tool.description}</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                            </div>
                        ))}
                    </div>


                </div>
                <div className="text-center bg-secondary">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to Integrate with Your Team?
                    </h3>
                    <button
                        onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')}
                        className="group inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-primary focus:outline-none"
                    >
                        Book a Free Consultation
                        <span
                            className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TeamIntegration;