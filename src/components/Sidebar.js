import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
	const { t } = useTranslation();
	const location = useLocation();
	const currentStep = () => {
		if (
			location.pathname === "/payments/cards" ||
			location.pathname === "/payments" ||
			location.pathname === "/payments/gift-voucher" ||
			location.pathname === "/payments/digital-wallet"
		)
			return 1;
		else if (
			location.pathname === "/successful" ||
			location.pathname === "/remove-tag" ||
			location.pathname === "/remove-green"
		)
			return 2;
		else if (location.pathname === "/receipt") return 3;
		else return 0;
	};

	const renderTimeLine = () => {
		const steps = [
			t("article-list"),
			t("pay"),
			t("remove-security-tag2"),
			t('receipt'),
		];

		const timeLineSteps = steps.map((step, index) => {
			if (index < currentStep()) {
				return (
					<li
						key={step}
						className="nav-header checked-header"
						style={{ listStyle: "none" }}>
						<div className="mz-step-indicator checked">
							<span>&#x2713;</span>
						</div>
						<div className="step">{step}</div>
					</li>
				);
			} else if (index === currentStep()) {
				return (
					<li
						key={step}
						className="nav-header"
						style={{ listStyle: "none" }}>
						<div className="mz-step-indicator active">
							<span>{index + 1}</span>
						</div>
						<div className="step">{step}</div>
					</li>
				);
			}
			return (
				<li
					key={step}
					className="nav-header"
					style={{ listStyle: "none" }}>
					<div className="mz-step-indicator">
						<span>{index + 1}</span>
					</div>
					<div className="step">{step}</div>
				</li>
			);
		});

		return <div className="time-line">{timeLineSteps}</div>;
	};

	return (
		<>
			<div className="col-12 col-md-2 bg-dark text-center left-nav">
				{renderTimeLine()}
			</div>
		</>
	);
};

export default Sidebar;
